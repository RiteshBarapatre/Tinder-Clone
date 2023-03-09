import express from 'express'
const app = express()
const port = process.env.PORT || 8000
import db from './src/db/connect.js'
import model from './src/models/models.js'
import cors from 'cors'
db()

app.use(cors())


app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello this is Home Page')
})

app.post('/tinder/registerUser',async (req,res)=>{
    const {name,imgUrl,age} = req.body

    const newUser = await model.create([{
        name,
        imgUrl,
        age
    }])
    console.log(newUser);
    res.status(201).send(`New user created : ${newUser}`) 
})

app.get('/tinder/getUser',async (req,res)=>{
    const users = await model.find({})
    console.log(users)
    res.status(200).send(users)
})

app.listen(port,()=>{
    console.log('listening...')
})