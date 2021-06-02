import express from 'express'
import apiRoutes from './routes/apiRoutes.js'
import connectDB from './config/db.js'

//Initialising DotENV
import dotenv from 'dotenv'
dotenv.config()

//Connecting DB
connectDB()
//Initialising Express
const app= express()

app.use('/api', apiRoutes )
// app.get('/api/', (req,res)=>{

//     res.json({
//         resumeIntro: "I am a college student",
//         experience: [["Junior Developer", "Worked at Infoqueue"], ["Salesman", "Salesman at GEsports"]],
//         phoneNumber: "9895647829",
//         email: "rharshit82@gmail.com",
//         linkedin: "linkedin.com/rharshit82",
//         accomplishments: [["Junior Developer", "Worked at Infoqueue"], ["Salesman", "Salesman at GEsports"]],
//     })
// })
const PORT = process.env.PORT
app.listen(PORT || '5000', ()=>console.log('App started'))