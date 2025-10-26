const express = require("express");

const app = express()

app.use("/home",(req,res)=>{
    res.send("hiiii from dashbord");
});

app.use("/hello",(req,res)=>{
    res.send("hiiii from suvarna");
});

app.use("/test",(req,res)=>{
    res.send("hiiii from nethul");
});


app.listen(7777,()=>{
    console.log("server is sucessfully listening port 7777");
});