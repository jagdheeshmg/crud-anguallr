angular.module("nodeApp").service("urlService",urlServiceModel);
//urlServiceModel.$inject=[];
function urlServiceModel(){
  this.createUser="/server/crateaccount";
  this.checkLogin="/server/login";
    this.viewUser = "/server/getData";

}
