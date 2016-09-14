import angular from "angular";
angular.module('app').controller("wsCtrl", ["$scope", ($scope) => {
	$scope.data1 = [{
		name: 1,
		value: 1
	},{
		name: 2,
		value: 2
	},{
		name: 3,
		value: 3
	},{
		name: 4,
		value: 4
	},{
		name: 5,
		value: 5
	}]
	$scope.data2 = [{
		name: 1,
		value: 1
	},{
		name: 2,
		value: 2
	},{
		name: 3,
		value: 3
	},{
		name: 4,
		value: 4
	}]
	$scope.pagination = {
		currentPage: 2,
		numPerPage: 10,
		total: 131
	}
}])
