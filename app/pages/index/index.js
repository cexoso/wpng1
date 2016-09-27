import angular from "angular";
import "./css/index.less";
import a from "resource/img/e.jpg";
import aa from "../../resource/img/index_banner.jpg";

angular.module('app').controller("indexCtrl",["$scope",($scope)=>{
    $scope.placeHolder = "anna and jack1";
	console.log(a)
	console.log(aa)
}]);
