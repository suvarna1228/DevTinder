const express = require("express");
const connectDB = require("./config/database");
const app = express()
const User= require("./models/user");
const user = require("./models/user");

app.use(express.json());

app.post("/signup",async(req,res)=>{
    const user =new User(req.body
        // firstName: "suvarna",
        // lastName:"s",
        // emailId:"suvarna@gmail.com",
        // password:"1234567"
    ) ;

    try{await user.save();
    res.send("user Added sucessfully")
    }catch(err){
        res.status(400).send("error saving data"+err.message)
    }
});

app.get("/user",async(req,res)=>{
    const userEmail = req.body.emailId;

    try{
        const user = await User.find({ emailId: userEmail });
        if(user.length ===0){
            res.status(404).send("User not found");
        }else{
            res.send(user);
        }
       
    }catch(err){
        res.status(400).send("something went wrong")
    }
});

app.get("/feed",async(req,res)=>{
try{
    const user= await User.find({});
    res.send(user);
}catch(err){
    res.status(400).send("something is wrong")
}
});

connectDB().then(()  => {
    console.log("Database Connected Sucessfully");
    app.listen(7777,()=>{
    console.log("server is sucessfully listening port 7777");
});
}).catch(err=>{
    console.error("Database canot be  Connected ");
})
