 const adminAuth = (req,res,next)=>{
    console.log("admin auth is getting cheaked!")
    const token = "xyz";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized){
     res.status(401).send("unauthorized data");
    }else{
        next();  }
};

 const userAuth = (req,res,next)=>{
    console.log("user auth is getting cheaked!")
    const token = "xyz";
    const isuserAuthorized = token ==="xyz";
    if(!isuserAuthorized){
     res.status(401).send("unauthorized data");
    }else{
        next();  }
};

module.exports = {
    adminAuth,
    userAuth
};