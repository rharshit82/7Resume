import express from 'express'



//Initialising Express
const app= express()

app.get('/api/resume', (req,res)=>{
    res.json({
        resumeIntro: "I am a college student",
        experience: [["Junior Developer", "Worked at Infoqueue"], ["Salesman", "Salesman at GEsports"]],
        phoneNumber: "9895647829",
        email: "rharshit82@gmail.com",
        linkedin: "linkedin.com/rharshit82",
        accomplishments: [["Junior Developer", "Worked at Infoqueue"], ["Salesman", "Salesman at GEsports"]],
    })
})