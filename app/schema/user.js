var mongoose=require ("mongoose");
var bcrypt=require("bcrypt-nodejs");
var schema=mongoose.Schema;

//factory object
var userSchema=new schema({
    name:String,
    username:{type:String, required:true,index:{unique:true} },   
    password:{type:String, required:true}
    
})
userSchema.pre("save",function(next){
               var data=this;
               bcrypt.hash(data.password, null, null, function(err, hash){
    data.password=hash;
    next();
});
               });

userSchema.methods.comparePassword=function(password){
    var vm=this;
    var result=bcrypt.compareSync(password,vm.password);
        return result;
}

module.exports=mongoose.model("User",userSchema);