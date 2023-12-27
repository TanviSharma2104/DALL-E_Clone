import mongoose from "mongoose";

const connectDB=(url)=>{
    mongoose.set('strictQuery',true);

    moongoose.connect(url)
        .then(()=> console.log('MongoDB connected'))
        .catch((err)=> console.log(err))
}

export default connectDB;