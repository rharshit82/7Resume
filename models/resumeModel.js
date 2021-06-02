import mongoose from 'mongoose'
const Schema = mongoose.Schema

const experienceSchema = Schema({
    role: {
        type:String
    },
    description:{
        type:String
    }
})

const accomplishmentsSchema = Schema({
    role: {
        type:String
    },
    description:{
        type:String
    }
})

const resumeSchema = Schema({
    resumeIntro : {
        type:String,
        required: true,
    },
    experience : 
       [experienceSchema],
    phoneNumber : {
        type:Number,
        required: true,
    },
    email : {
        type:String,
        required: true,
    },
    linkedin : {
        type:String,
    },
    accomplishments : [accomplishmentsSchema]
})

const Resume = mongoose.model('Resume',resumeSchema)
export default Resume