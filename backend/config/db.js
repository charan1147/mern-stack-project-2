const mongoose=require("mongoose")
const dotenv=require("dotenv")


dotenv.config();


const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("successfully connect");
        
    } catch (error) {
        console.log("failed to connect",error);

    }
}

module.exports=connectDB;