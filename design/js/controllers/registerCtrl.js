angular.module("nodeApp").controller("registerCtrl",registerCtrlModel);
registerCtrlModel.$inject = ['httpService' ];

function registerCtrlModel(httpService){

    var vm=this;
    vm.register=function(fm){
      
      var response=httpService.createUser(fm); 
        response.then(function(result){
          if(result.data.errmsg){
             vm.message="username already exist";
          } else{
              vm.message="successfully created account";   
          }
        },function(result){
        console.log(result);    
            
        })
        
    }
}
