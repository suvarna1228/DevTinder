const express = require("express");

const app = express()

app.get("/admin",(req,res,next)=>{
    console.log("admin auth is getting cheaked!")
    const token = "xyz";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized){
     res.status(401).send("unauthorized data");
    }else{
        next();  }
});
app.get("/admin/getAllData",(req,res)=>{
   
        res.send("all data send")  
});

app.get("/admin/deleteUser",(req,res)=>{
    
    res.send("Deleted a user");
   
});

app.listen(7777,()=>{
    console.log("server is sucessfully listening port 7777");
});