const express = require("express");

const app = express()

app.get("/admin",(req,res,next)=>{
    const token = "xysvgh";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized){
     res.status(401).send("unauthorized data");
    }else{
        next();  }
});
app.get("/admin/getAllData",(req,res)=>{
    const token = "xysvgh";
    const isAdminAuthorized = token ==="xyz";
    if(isAdminAuthorized){
        res.send("all data send")
    }else{
     res.status(401).send("unauthorized data");
    }
    
   
});

app.get("/admin/deleteUser",(req,res)=>{
    
    res.send("Deleted a user");
   next()
});

app.listen(7777,()=>{
    console.log("server is sucessfully listening port 7777");
});