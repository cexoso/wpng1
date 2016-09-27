import angular from "angular";
import tpl from "html!./pagination.html";
import {range,min,max} from "../../js/util.js";
import "./pagination.less";
export default function (components) {
    angular.module(components).directive('cePagination',[()=>{
        return {
			template: tpl,
			scope: {
				currentPage: "=",
				total: "="
			},
			controller: ["$scope",($scope)=>{
				$scope.numPerPages = [10,20,50,100];
				$scope.numPerPage = $scope.numPerPages[0];
				function changePages() {
					const {currentPage,total,numPerPage} = $scope;
					if (currentPage === void 0 || total === void 0) {
						return void 0;
					}
					const totalPage = Math.ceil(total / numPerPage);
					$scope.totalPage = totalPage;
                    const from = max(currentPage - 3,1);
                    const to = min(currentPage + 3,totalPage);
                    const pages = range(from,to);
                    $scope.pages = pages;
				}
				$scope.$watch("currentPage",changePages)
				$scope.$watch("total",changePages)
			}]
        }
    }]);
}
