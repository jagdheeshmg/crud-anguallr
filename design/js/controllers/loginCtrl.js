angular.module("nodeApp").controller("loginCtrl",loginCtrlModel);
loginCtrlModel.$inject = ['httpService' ,'$state'];

function loginCtrlModel(httpService,$state){
console.log("this is login ctrl ");
var vm=this;
vm.loginNow=function(fm){
  
var response=httpService.loginNow(fm);
response.then(function(result){ console.log(result);
     $state.go('viewUsers');
            },
function(result){  console.log(result);});

}

}
