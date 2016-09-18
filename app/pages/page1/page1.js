import angular from "angular";
angular.module('app').controller("AccordionDemoCtrl", ["$scope", "modal",($scope,modal) => {
	modal.open({
		controller: "modalCtrl"
	});
	// $scope.open = function () {
	// 	modal.open({
	// 		controller: "modalCtrl"
	// 	});
	// }
}]).controller("modalCtrl",["$scope",($scope)=>{
	console.log($scope)
	$scope.q = 1;
}]);
