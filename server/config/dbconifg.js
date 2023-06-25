import mongoose from "mongoose";
const DATABASE="mongodb+srv://margamvinay:vinay756@vinay.tch0oea.mongodb.net/?retryWrites=true&w=majority"

const connectDB=()=>{
    mongoose.connect(DATABASE,{useUnifiedTopology:true,useNewUrlParser:true}
        ).then(()=>{
            console.log("database connected")
        }).catch((err)=>{console.log(err)})
}
export default connectDB