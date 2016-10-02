ui_template.controller('loginController', ['$scope', '$location', function($scope, $location) {
	$scope.username = "admin";
	$scope.password = "password";
		
	$scope.login = function(username, password) {
		console.debug('Logging in using %s and %s ...'.format(username, password))
	}


	if ($location.host()=='localhost') {
		console.debug('dev mode ON')
	}

}])