const mongoose=require("mongoose");

const Userschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{ type:String,required:true,unique:true},
    mobile:{type:Number,required:true},
    age:{type:Number,required:true},
    work:{ type:String,required:true},
    add:{ type:String,required:true},
    desc:{ type:String,required:true}
})

const User=mongoose.model("user",Userschema);
module.exports=User