angular.module("nodeApp").service("httpService",httpServiceModel);
httpServiceModel.$inject=['$http','urlService'];
function httpServiceModel($http,urlService){

  this.loginNow=function(data){
    console.log("login now http");
 var promise=$http.post(urlService.checkLogin,data);
      console.log(data);
 return promise;
  }


  this.createUser=function(data){
   
 var promise=$http.post(urlService.createUser,data);
 return promise;
  }
  
  this.viewUsers=function(data){
   
 var promise=$http.get(urlService.viewUser);
 return promise;
  }

}
