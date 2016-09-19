import angular from "angular";
angular.module('app').controller("AccordionDemoCtrl", ["$scope", "modal",($scope,modal) => {
	// modal.open({
	// 	controller: "modalCtrl",
	// 	template: "<h1>{{q}}</h1>"
	// });
	// modal.open({
	// 	controller: "modalCtrl",
	// 	template: "<h1>{{q}}</h1>"
	// });
	// $scope.open = function () {
	// 	modal.open({
	// 		controller: "modalCtrl",
	// 		template: "<h1>{{q}}</h1>"
	// 	});
	// }

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
	},{
		name: 11,
		value: 11
	},{
		name: 21,
		value: 21
	},{
		name: 31,
		value: 31
	},{
		name: 41,
		value: 41
	},{
		name: 51,
		value: 51
	}];
}]).controller("modalCtrl",["$scope","modalInstance",($scope,modalInstance)=>{
	$scope.q = 1;
	setTimeout(()=>{
		modalInstance.close();
	},1000);
}]);
