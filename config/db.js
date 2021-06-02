import mongoose from 'mongoose'

const connectDB = async () =>{
try{
const res = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true});
console.log("DB Connected")
} catch(err) {
    console.log(err)
    process.exit(1)
}
}

export default connectDB
