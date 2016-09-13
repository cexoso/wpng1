import angular from "angular";
import tpl from "html!./pagination.html";
export default function (components) {
    angular.module(components).directive('cePagination',[()=>{
        return {
			template: tpl,
			scope: {
				currentPage: "=",
				total: "=",
				numPerPage: "="
			},
			controller: ["$scope",($scope)=>{
				function changePages() {
					const {currentPage,total} = $scope;
					if (currentPage === void 0 || total === void 0) {
						return void 0;
					}
				}
				$scope.$watch("currentPage",changePages)
				$scope.$watch("total",changePages)
			}]
        }
    }]);
}
