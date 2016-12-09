angular.module("nodeApp",['ui.router']);
angular.module("nodeApp").config(function($stateProvider,$urlRouterProvider){

  $stateProvider.state("login",{url:"/login",templateUrl:"templates/login.html",
  controller:"loginCtrl",controllerAs:"logCtrl"
  })
  .state("register",{url:"/register",templateUrl:"templates/register.html",
  controller:"registerCtrl",controllerAs:"regCtrl"
})
  .state("viewUsers",{url:"/viewUsers",templateUrl:"templates/viewUsers.html",
  controller:"viewUserCtrl",controllerAs:"viewlogCtrl"
  });
$urlRouterProvider.otherwise("/login");
});
