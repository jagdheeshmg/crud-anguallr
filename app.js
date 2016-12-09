var express=require("express");
var bodyParser=require ("body-parser");
var mongoose=require ("mongoose");
var morgan=require ("morgan");
var nodemon=require ("nodemon");
var expressMethodOverride=require("express-method-override");
var config=require ("./config");//to access file we must use "./" 
                                //for module we can use direct module name
var api=require("./app/apis/api")(app,express);
var app=express();

app.listen(config.port, function(err){
    if(err){
        console.log("error");
    }
    else{
      console.log("app working successfully");  
    }
    
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use("/server",api);
app.use(express.static(__dirname+'/design'));
mongoose.connect(config.database, function(err){
    if(err){
        console.log("database Error");
        
    }
    else{
        console.log("database connected successfully");
    }
})

app.get("*", function(req,res){
    res.sendFile(__dirname + "/design/index.html" );
})
