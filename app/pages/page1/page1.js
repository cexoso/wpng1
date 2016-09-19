import angular from "angular";
angular.module('app').controller("AccordionDemoCtrl", ["$scope", "modal",($scope,modal) => {
	modal.open({
		controller: "modalCtrl",
		template: "<h1>{{q}}</h1>"
	});
	modal.open({
		controller: "modalCtrl",
		template: "<h1>{{q}}</h1>"
	});
	$scope.open = function () {
		modal.open({
			controller: "modalCtrl",
			template: "<h1>{{q}}</h1>"
		});
	}
}]).controller("modalCtrl",["$scope","modalInstance",($scope,modalInstance)=>{
	$scope.q = 1;
	setTimeout(()=>{
		modalInstance.close();
	},1000);
}]);
