import mongoose from "mongoose";

// mongodb://<hostname>:<port>/<database_name> 
const url = "mongodb://localhost:27017/mydb";

async function connect(){ 
    try{
        const db = await mongoose.connect(url);
        console.log("Database connected successfully");
    }catch(err){
        console.log("Error : ", err);
    }
}

connect();