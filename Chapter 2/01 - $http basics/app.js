angular.module("myApp", [])
    .controller("myCtrl", ['$scope', '$http', function ($scope, $http) {
        $http({
            method : 'GET',
            url : 'data.json',
            params : {
            }
        }).success(function (data, status, headers, config) {
            $scope.data = data;
            console.log(status); // status headers
            console.log(config); // show object
        }, function (data, status, headers, config) {
            throw new Error('something went wrong!!!');
        });
    }]);