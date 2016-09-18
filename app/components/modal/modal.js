import angular from "angular";

export default function (components) {
    angular.module(components).service('modal',["$controller",($controller)=>{
		const modal = {}
		console.log($controller)
		modal.open = function (opt) {
			const {controller} = opt;
			const locals = {}
			locals.$scope = {}
			if (controller !== void 0) {
				const controllerInstance = $controller(controller,locals);
				console.log(controllerInstance);
				console.log(locals)
			}
		}
        return modal;
    }]);
}
