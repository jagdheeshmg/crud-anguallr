var User=require("../schema/user");
var Event=require("../schema/event");

var config=require("../../config");

                                    //creating WebToken

var jsonWebToken=require("jsonwebtoken");
function createWebtoken(row) {
    var token=jsonWebToken.sign({_id:row._id,name:row.name,username:row.username},config.secretKey,{expiresIn:1440});
    return token;       
        
    }

module.exports=function(app,express){
var api= express.Router();
    
                                        //crate account
    api.post("/crateaccount", function(req,res){
        
        var user=new User({
            name:req.body.name,
            username:req.body.username,
            password:req.body.password,
            
        });
        
        user.save(function(err){
            if(err){
                res.send(err);
                
            }else
                {res.json({msg:"Success fully Created"});}                                
                
            
        });
        
       
    });
    
                            // create Event
    
        api.post("/createEvent", function(req,res){
        
        var event=new Event({
            eventName:req.body.eName,
            eventDate:req.body.date,
            eventVenue:req.body.venue,
            eventContact:req.body.contact
        });
        
        event.save(function(err){
            if(err){
                res.send(err);
                
            }else
                {
                    res.json({msg:"Success fully event Created"});
                }                                
                
            
        });
        
       
    });
                            
                //retriveing(get) data from database    
    
    api.get("/getData",function(req,res){
        User.find({},function(err,data){
            if(err){res.send("error")}
            else
                {res.send(data)}
        });
    });
             
    
        api.get("/getEvent",function(req,res){
        Event.find({},function(err,data){
            if(err){res.send("error")}
            else
                {res.send(data)}
        });
    });
                                                
                                         //login
    
   api.post("/login",function(req,res){
    User.findOne({username:req.body.username}).select("password").exec(function(err,user){
      if(err) throw err;
      if(!user){
        res.send({message:"user doesnot exist"});
      } else if(user){
        var validPassword=user.comparePassword(req.body.password);
        if(!validPassword){
          res.send({message:"Invalid Password"});
        } else{
          var token=createWebtoken(user);
          res.json({
            message:"succuessfully login",
            success:true,
            token:token
          });
        }
      }
    });
  });
    
    
                                    // update data
    
    api.put("/updateEvent",function(req, res) {
		Event.findById(req.body.id, function(err,Event) {

			if (err)
				res.send(err);

			Event.eventName = req.body.eName;
			Event.eventDate = req.body.date;
			Event.eventVenue = req.body.venue;
			Event.eventContact = req.body.contact;
			Event.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Event updated!' });
			});

		});
	})

                            // delete
    
    
    api.post('/deleteEvent', function(req, res) {
        
       Event.findByIdAndRemove(req.body.id, function (err, Event) {
           
    var response = {
        message: "Eventt successfully deleted",
        id: Event._id
    };
    res.send(response);
});
        /*Event.remove({
            eventName : req.body.eventName
        }, function(err) {
            res.send(req.params.eventName);
            if (err){
                res.send(err);
            } else{
                res.json({message:"success fully deleted",eName:req.params.eventName});
            }

            // get and return all the todos after you create another
         
        });*/
    });
        
           
return api;
    
    
    
}