import app from "./init";
import "./pages/index/index.js";
import "./pages/page1/page1.js";
app.config(['$stateProvider','$urlRouterProvider',($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index',{
        url: '/index',
        template: require('html!./pages/index/index.html')
    }).state('page1',{
        url: '/page1',
        template: require('html!./pages/page1/page1.html')
    });
}]);
