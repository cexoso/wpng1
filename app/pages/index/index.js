import angular from "angular";
import "./index.sass";

angular.module('app').controller("indexCtrl",["$scope",($scope)=>{
    $scope.placeHolder = "anna";
}]);
