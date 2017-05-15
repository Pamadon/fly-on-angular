angular.module("FlyApp")
    .controller("PlanesCtrl", ["$scope", 'Planes', function($scope, Planes) {
        $scope.title = "Peter's Planes";
        $scope.planes = [];
        $scope.searchWord;

        Planes.getPlanes().then(function success(res) {

            $scope.planes = res.data;
        }, function error(err) {

        })

        $scope.searchPlane = function() {

            Planes.getPlanes($scope.searchTerm).then(function(res) {

                $scope.planes = res.data;

            }, function error(err) {

            })
        }
    }])
    .controller("DetailCtrl", ['$scope', '$stateParams', 'Planes', "$location", function($scope, $stateParams, Planes, $location) {
        $scope.title = ""
        $scope.plane = {};

        Planes.getPlane($stateParams.id).then(function success(res) {
            $scope.plane = res.data;
        }, function error(err) {

        })
        $scope.delete = function() {
            Planes.deletePlane($stateParams.id);
        }
        $scope.updatePlane = function() {

            Planes.updatePlane($scope.plane).then(function success(res) {

                $location.path('/plane/' + $scope.plane._id);
            }, function error(err) {

            });
        };
    }])
    .controller("NewPlaneCtrl", ["$scope", "$location", "Planes", function($scope, $location, Planes) {
        $scope.plane = {
            company: '',
            model: '',
            engines: '',
            picture: ''
        };
        $scope.addPlane = function() {

            Planes.addPlane($scope.plane).then(function success(res) {

                $location.path('/');
            }, function error(err) {

            });
        };
    }]);
