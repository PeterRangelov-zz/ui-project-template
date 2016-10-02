ui_template.controller('mainController', ['$scope', '$location', function($scope, $location) {
		$scope.message = "Hello angular";
		



		if ($location.host()=='localhost') {
			console.log('dev mode ON')
		}

}])