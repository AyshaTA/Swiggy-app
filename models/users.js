const mongoose=require("mongoose")

const userSchema = mongoose.Schema(
    {
    
        name:
        {
            type:String,
            required:true
    },
    phone:String,
    email:{
        type:String,
            required:true
    },
    password:{
        type:String,
            required:true
    }
    }
)
var userModel = mongoose.model("user",userSchema)
module.exports=userModel