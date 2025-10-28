const mongoose = require("mongoose");

const connectDB= async()=>{
    await mongoose.connect(
        "mongodb+srv://NamsteDev:Jq1SmzWOzDSeaKFn@2352.tvswwbz.mongodb.net/DevTinder"
    );
}
module.exports=connectDB;
