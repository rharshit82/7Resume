import express from 'express'
import resumeModel from '../models/resumeModel.js'
var router = express.Router()



router.get('/product', (req,res) => {
    const newdata = resumeModel({
        resumeIntro: "I am a college student",
        experience: [{role: "Junior Developer",description: "Worked at Infoqueue"}, , {role:"Salesman",description: "Salesman at GEsports"}],
        phoneNumber: "9895647829",
        email: "rharshit82@gmail.com",
        linkedin: "linkedin.com/rharshit82",
        accomplishments: [{role: "Junior Developer",description: "Worked at Infoqueue"}, , {role:"Salesman",description: "Salesman at GEsports"}]
    })
    newdata.save().then( (err) =>{if(err) console.log(err)})
    return res.send("Hi")
})
router.get('/hello',async  (req,res) =>{
    const data = await resumeModel.findOne({_id: "60b72d36f76b452ca0526e20"})
    res.send(data.experience[0].role)
})

export default router