import express from 'express'
import mongoose from 'mongoose'
import cors from "cors";
import upload from 'express-fileupload'

import { userRouter } from './routes/userRoute.js';
import { financeRouter } from './routes/financeRoute.js';

const app = express()
const PORT = 8080
app.use(express.json())
app.use(upload())

app.use(cors());

//root path
app.use('/', userRouter)

// User Routes
app.use('/user', userRouter)

// Finance Routes
app.use('/finance', financeRouter)

// File Upload Routes
app.get('/file-upload', (req, res) => {
  // res.sendFile(__dirname + '/index.html')
  res.sendFile('C:\Users\vinay\Desktop\Pesto projects\Week-14\wealthPortfolio\index.html' + '/index.html')
})

app.post('/file-upload', (req, res) => {
  if(req?.files) {
    let file = req?.files?.file
    let fileName = file?.name
    file.mv('./uploads/' + fileName, (err, file) => {
      if (err) { throw err }
      else {
        res.send('File uploaded successfully')
      }
    })
  }
})

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/wealthPortfolio"
    )
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  } catch (err) {
    console.error(err)
  }
}

start()
