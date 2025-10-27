const express = require("express");

const app = express()

app.get("/user",(req,res,next)=>{
    
    res.send("Route Handler-1");
   next()
},

(req,res,next)=>{
    res.send("Route Handler2");
    next()
},
(req,res,next)=>{

    res.send("Route Handler-3");
    next()
   
},

(req,res,next)=>{
    
    res.send("Route Handler-4");
    next()
   
}

);



app.listen(7777,()=>{
    console.log("server is sucessfully listening port 7777");
});