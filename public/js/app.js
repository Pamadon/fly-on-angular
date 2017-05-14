console.log('Loaded')
var app = angular.module("AirplaneApp", ['ui.router']);


app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('airplanes', {
            url: '/',
            templateUrl: 'app/airplanes.html'
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/404.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/about.html'
        })
    $locationProvider.html5Mode(true);
}]);
