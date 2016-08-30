import app from "./init";
import "./pages/index/index.js";
app.config(['$stateProvider','$urlRouterProvider',($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index',{
        url: '/index',
        template: require('html!./pages/index/index.html')
    });
}]);
