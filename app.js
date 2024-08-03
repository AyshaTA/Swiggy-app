const express =require("express")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const cors=require("cors")
const jsonwebtoken=require("jsonwebtoken")
const userModel=require("./models/users")
const res = require("express/lib/response")
const {jsonwebtokenerror}=require("jsonwebtoken")
let app=express()
app.use(express.json())
app.use(cors())


app.post("/signup",async(req,res)=>{
    let input=req.body
    let hashedPassword =bcrypt.hashSync(req.body.password,10)
    console.log(hashedPassword)
    req.body.password=hashedPassword
    userModel.find({email:req.body.email}).then(
        (item) => {

            if(item.length>0)
                {
                    res.json({"status":"email Id already exist"})
                }else{
        
                    let result= new userModel(input)
                    result.save()
                   res.json({"status":"sucess"})
                } 

        }
    ).catch(
        (error)=>{}
    )
}
)
app.listen(3032,()=>{
    console.log("Server Started")
})



