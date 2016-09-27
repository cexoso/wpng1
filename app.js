var request = require('request');
var Promise = require('promise');
var seed = "57e8d42186b598797792841b";
function get(url) {
	var promise = new Promise(function(resolve,reject) {
		request({
			method: "get",
			url: url			
		},function(error,resonse,body) {
			if (!error && resonse.statusCode == 200) {
				resolve(body);
			} else {
				reject(resonse)
			}
		})
	});
	return promise;	
}
get("http://hr.tuputech.com/recruit/v2/tree?seed=" + seed).then(function(body) {	
	body = JSON.parse(body)
	var treeId = body.treeId;	
	var tree = body.tree;
	console.log("tree");
	console.log(JSON.stringify(tree));
	console.log("tree end");
	getAns(tree).then(function(p) {
		console.log("result");
		console.log(JSON.stringify(p));
		console.log("result end");
		var params = {
			treeId: treeId,
			result: p,
			seed: seed
		}
		post("http://hr.tuputech.com/recruit/v2/tree",params).then(function(res) {			
			console.log(res);
		},function(rej) {
			console.log(rej);
		})
	})
},function(rej) {
	console.log(rej);
})
var cachePost = (function () {
	var cache = {}
	return function (type) {
		var t = cache[type];
		if (t) {
			return t;
		} else {
			var promise = post("http://hr.tuputech.com/recruit/tree/" + type);			
			cache[type] = promise;
			return promise;
		}
	}	
})();
function post(url,data) {
	var promise = new Promise(function(resolve,reject) {
		request({
			method: "post",
			headers: {"Connection": "close"},
			url: url,
			json: true,
			body: data
		},function(error,resonse,body) {
			if (!error && resonse.statusCode == 200) {
				resolve(body);
			} else {
				reject(resonse)
			}
		})
	});
	return promise;	
}

function getAns(node) {
	var type = node.type;	
	var promise = new Promise(function(resolve,reject) {
		var promises = [];
		var o = {};		
		var promise = cachePost(type).then(function(res) {
			o.result = res;
			return res;
		})
		promises.push(promise);
		var child = node.child || [];
		if (child.length > 0) {			
			var promiseList = Promise.all(child.map(function(item) {
				return getAns(item).then(function(r) {					
					return r;
				});
			})).then(function(res) {
				o.child = res
			},function(rej) {
				reject(rej);
			});			
			promises.push(promiseList);
		} else {
			o.child = [];
		}
		Promise.all(promises).then(function(){
			resolve(o);			
		},reject);
	})	
	return promise;	
}