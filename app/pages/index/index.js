import angular from "angular";
import "./index.scss";

angular.module('app').controller("indexCtrl",["$scope",($scope)=>{
    $scope.placeHolder = "anna";
}]);
