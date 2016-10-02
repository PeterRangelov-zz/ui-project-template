console.log('main.js running')

var ui_template = angular.module('ui_template', ['ngRoute', 'ui.bootstrap']);

ui_template.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'mainController'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
      })
        

      ;

}]);
