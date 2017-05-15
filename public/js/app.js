angular.module("FlyApp", ["ui.router"])
    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/404");

        $stateProvider.state("home", {
                url: "/",
                templateUrl: "app/planes.html",
                controller: "PlanesCtrl"
            })
            .state("plane", {
                url: "/plane/:id",
                templateUrl: "app/details.html",
                controller: "DetailCtrl"
            })
            .state("404", {
                url: "/404",
                templateUrl: "app/404.html",
            })
            .state("add", {
                url: "/add",
                templateUrl: "app/add.html",
                controller: "NewPlaneCtrl"
            })
            .state("edit", {
                url: "/edit/:id",
                templateUrl: "app/edit.html",
                controller: "DetailCtrl"
            })

        $locationProvider.html5Mode(true);
    }]);
