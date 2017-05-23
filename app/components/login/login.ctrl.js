ui_template.controller('loginCtrl', ['$scope', '$location', function($scope, $location) {
	console.debug('loginCtrl')



	if ($location.host()=='localhost') {
		console.log('dev mode ON')
	}
}])