import angular from "angular";
import tpl from "html!./combobox.html";
export default function (components) {
    angular.module(components).directive('ceCombobox',[()=>{
        return {
			template: tpl,
			scope: {
				data: "=",
				ngModel: "="
			},
			controller: ["$scope",($scope)=>{
				$scope.showCombobox = false;
				$scope.comboxClickHandle = function () {
					$scope.showCombobox = !$scope.showCombobox;
				}
				$scope.onChose = function (d) {
					console.log(d)
					$scope.showCombobox = false;
					$scope.ngModel = d;
				}
			}]
        }
    }]);
}
