ui_template.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


  var homeState = {
      name: 'home',
      url: '',
      templateUrl: 'components/home/home.tpl.html',
  }
  var loginState = {
      name: 'login',
      url: 'login',
      templateUrl: 'components/login/login.tpl.html',
      controller: 'loginCtrl',
  }


      $stateProvider.state(homeState);
      $stateProvider.state(loginState);

}]);
