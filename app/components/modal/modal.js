import angular from "angular";
import "./modal.less";
export default function (components) {
    angular.module(components).service('modal',["$controller","$compile","$rootScope",($controller,$compile,$rootScope)=>{
        const body = angular.element(document.getElementsByTagName("body")[0]);
        const ModalBg = angular.element(document.createElement("div"));
        ModalBg.addClass("ModalBg");
		const modal = {}
        const windows = [];
        function remove(w,item) {
            const index = w.indexOf(item);
            w.splice(index,1);
        }
        function open(html,scope,div) {
            div.attr("window_id",windows.length);
            div.html(html);
			//getMaxIndex
			const index = (windows[windows.length - 1] ? windows[windows.length - 1].index : 2000) + 1
            div.css("zIndex",index);
            windows.push({div,index});
            body.after(ModalBg);//插入ModalBg
            body.after(div);
            $compile(div)(scope);
            return div;
        }
        function _getTpl(opt) {
            return opt.template;
        }
        function _modalInstanceFactor(div) {
            const modalInstance = {};
            modalInstance.close = function () {
                remove(windows,div);
                if (windows.length === 0) {
                    ModalBg.remove();
                }
                div.remove();
            }
            return modalInstance;
        }
		modal.open = function (opt) {
			const {controller} = opt;
            const $scope = $rootScope.$new();
            const div = angular.element(document.createElement("div"));
            const modalInstance = _modalInstanceFactor(div);
            const locals = {$scope,modalInstance}
			if (controller !== void 0) {
				$controller(controller,locals);
			}
            open(_getTpl(opt),locals.$scope,div);
		}
        return modal;
    }]);
}
