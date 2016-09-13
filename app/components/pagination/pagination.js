import angular from "angular";
import tpl from "html!./pagination.html";
function range(from,to) {
    const arr = [];
    for (let i = from; i <= to; i++) {
        arr.push(i);
    }
    return arr;
}
function min(a,b) {
    return a < b ? a : b;
}
function max(a,b) {
    return a > b ? a : b;
}
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
                    const from = max(currentPage - 3,1);
                    const to = min(currentPage + 3,total);
                    const pages = range(from,to);
                    $scope.pages = pages;
				}
				$scope.$watch("currentPage",changePages)
				$scope.$watch("total",changePages)
			}]
        }
    }]);
}
