import app from "./init";
import "./js/service.js";
import "./pages/index/index.js";
import "./pages/page1/page1.js";
import "./pages/ws/wsCtrl.js";
import "./pages/login/loginCtrl.js";
app.config(['$stateProvider','$urlRouterProvider',($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index',{
        url: '/index',
        template: require('html!./pages/index/index.html'),
        controller: "indexCtrl"
    }).state('page1',{
        url: '/page1',
        template: require('html!./pages/page1/page1.html'),
        controller: "AccordionDemoCtrl"
    }).state('ws',{
        url: '/ws',
        template: require('html!./pages/ws/ws.html'),
        controller: "wsCtrl"
    }).state('login',{
        url: '/login',
        template: require('html!./pages/login/login.html'),
        controller: "loginCtrl"
    });
}]);
