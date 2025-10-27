const express = require("express");

const app = express()

app.get("/user",(req,res,next)=>{
     next()
    res.send("Route Handler-1");
   
},

(req,res)=>{
    res.send("Route Handler2");
});



app.listen(7777,()=>{
    console.log("server is sucessfully listening port 7777");
});