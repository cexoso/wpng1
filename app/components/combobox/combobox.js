import angular from "angular";
import tpl from "html!./combobox.html";
import {find} from "../../js/util.js";

export default function (components) {
    angular.module(components).directive('ceCombobox',[()=>{
		const body = angular.element(document.getElementsByTagName("html")[0]);
		let showingItem = [];
		function bodyClickHandle() {
			showingItem = showingItem.filter(item=>{
				item.$apply(()=>{item.showCombobox = false});
			});
		}
		body.on("click",bodyClickHandle);
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
					if (!$scope.showCombobox) {
						$scope.showCombobox = true;
						setTimeout(()=>{
							showingItem.push($scope);
						},0);
					}
				}
				$scope.$watch("ngModel",n=>{
					if (n !== void 0) {
						const d = find($scope.data,item=>(n === (valueField === void 0 ? item : item[valueField]))) || $scope.data[0];
						$scope.checkItem = d;
					}
				});
				$scope.onChose = function (d) {
					$scope.checkItem = d;
					$scope.showCombobox = false;
					$scope.ngModel = valueField === void 0 ? d : d[valueField];
				}
			}]
        }
    }]);
}
