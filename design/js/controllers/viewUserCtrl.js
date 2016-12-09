angular.module("nodeApp").controller("viewUserCtrl",viewUserCtrlModel);
viewUserCtrlModel.$inject = ['httpService' ];

function viewUserCtrlModel(httpService){
var vm = this;
var response = httpService.viewUsers();
    response.then(function(x){ vm.userdata=x.data;},function(y){console.log(y.data)});
//$scope.users=list;
    

}