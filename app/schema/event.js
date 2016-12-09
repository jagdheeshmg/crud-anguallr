var mongoose=require ("mongoose");
var eventSchema = mongoose.Schema;
//event factory object
var eSchema=new eventSchema({
    eventName:String,
    eventDate:String,
    eventVenue:String,
    eventContact:String
})
module.exports=mongoose.model("Event",eSchema);