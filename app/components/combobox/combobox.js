import angular from "angular";
import tpl from "html!./combobox.html";
export default function (components) {
    angular.module(components).directive('ceCombobox',[()=>{
        return {
			template: tpl,
			scope: {
				data: "=",
				ngModel: "=",
				textField: "@",
				valueField: "@"
			},
			controller: ["$scope",($scope)=>{
				$scope.showCombobox = false;
				const {valueField} = $scope;
				$scope.comboxClickHandle = function () {
					$scope.showCombobox = !$scope.showCombobox;
				}
				$scope.onChose = function (d) {
					$scope.checkItem = d;
					$scope.showCombobox = false;
					$scope.ngModel = valueField === void 0 ? d : d[valueField];
				}
			}]
        }
    }]);
}
