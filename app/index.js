import app from "./init";

app.config(['$stateProvider','$urlRouterProvider',($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/setting/others');
    $stateProvider.state('index',{
        url: '/index',
        template: require('html!./pages/index/index.html')
    });
}]);
