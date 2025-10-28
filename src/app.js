const express = require("express");
const connectDB = require("./config/database");
const app = express()
const User= require("./models/user");


app.post("/signup",async(req,res)=>{
    const user =new User({
        firstName: "suvarna",
        lastName:"s",
        enailId:"suvarna@gmail.com",
        password:"1234567"
    }) ;

    await user.save();
    res.send("user Added sucessfully")
});


connectDB().then(()  => {
    console.log("Database Connected Sucessfully");
    app.listen(7777,()=>{
    console.log("server is sucessfully listening port 7777");
});
}).catch(err=>{
    console.error("Database canot be  Connected ");
})
