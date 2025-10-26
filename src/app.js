const express = require("express");

const app = express()

app.get("/user",(req,res)=>{
    res.send("hiiii from dashbord");
});

app.post("/user",(req,res)=>{
    res.send("hiiii from suvarna");
});

app.use("/test",(req,res)=>{
    res.send("hiiii from nethul");
});


app.listen(7777,()=>{
    console.log("server is sucessfully listening port 7777");
});