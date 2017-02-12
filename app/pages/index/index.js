import angular from "angular";
import "./css/index.less";
import _ from "lodash";

const tpl = require("html!./tpl.html");
const nodeCtrl = ["$scope", (s) => {
	const {isEmpty} = _;
	s.data.isClose = s.level === 0 ? 2 : 0;
	s.hasChilren = function (d) {
		return !isEmpty(d.org) || !isEmpty(d.proj);
	}
	s.$watch("data.selected", (n) => {
		const {father} = s;
		if (father && n !== void 0) {
			const {org, proj} = father;
			const children = _.compact(_.concat(org, proj));
			const groupBy = _.groupBy(children, c => c.selected === void 0 ? 0 : c.selected);
			father.selected = _.keys(groupBy).length > 1 ? 1 : n;
		}
	});
	function set(data, xx) {
		data.selected = xx;
		_.map(data.org, o => set(o, xx));
		_.map(data.proj, o => set(o, xx));
	}
	s.change = function (data, xx) {
		set(data, xx);
	}
}]
angular.module('app')
	.controller("indexCtrl", ["$scope", (s) => {
		s.data = {
			name: "root",
			org: [{
				name: "org1",
				org: [{
					name: "org11"
				}],
				proj: [{
					name: "proj11"
				}, {
					name: "root",
					org: [{
						name: "org1",
						org: [{
							name: "org11"
						}],
						proj: [{
							name: "proj11"
						}]
					}],
					proj: [{
						name: "proj1"
					}]
				}]
			}],
			proj: [{
				name: "proj1"
			}]
		}
		s.tpl = tpl
		s.nodeCtrl = nodeCtrl;
	}])
	.directive("include", ["$compile", ($compile) => {
		return {
			restrict: "E",
			link(s, e, a) {
				s.$watch(scope => scope.$eval(a.tpl), (n) => {
					if (n !== void 0) {
						e.html(n);
						$compile(e.contents())(s);
					}
				})
			}
		}
	}])
	.directive("inputM", [() => {
		return {
			restrict: "E",
			template: `<span ng-click="clickHandle()">{{format(model)}}</span>`,
			scope: {
				model: "=",
				change: "&"
			},
			controller: ["$scope", (s) => {
				s.clickHandle = function () {
					s.model = s.model ? 0 : 2;
					setTimeout(() => s.$apply(s.change), 0);
				}
				s.format = function (model) {
					return ["空", "半", "选"][model || 0];
				}
			}]
		}
	}])

