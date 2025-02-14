var app = angular.module('simpleApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/home.html',  // Correct path to home.html
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'app/about.html',  // Correct path to about.html
            controller: 'AboutController'
        })
        .otherwise({
            redirectTo: '/'  // Default route to the home page
        });
}]);

app.controller('HomeController', ['$scope', function($scope) {
    $scope.title = "Welcome to the Home Page";
    $scope.message = "This is the home page of the AngularJS SPA.";
}]);

app.controller('AboutController', ['$scope', function($scope) {
    $scope.title = "About Me";
    $scope.message = "This is the About Me page. Here you can share details about yourself.";
}]);
