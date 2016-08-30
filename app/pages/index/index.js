import angular from "angular";
import "./index.scss";
import a from "resource/img/e.jpg";
import aa from "../../resource/img/e.jpg";

angular.module('app').controller("indexCtrl",["$scope",($scope)=>{
    $scope.placeHolder = "anna";
	console.log(a)
	console.log(aa)
}]);
