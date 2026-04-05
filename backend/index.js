import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import userInputRouter from './routers/user_input.js'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err))

// testing!!
// app.get("/test", async (req, res) => {
//   try {
//     const newUserInput = await UserInput.create({
//       mood: 1,
//       energy: 3,
//       food_status: false
//     });

//     res.json(newUserInput);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// })

app.use('/api/user-input', userInputRouter)

app.listen(8080, () => console.log('Server running on port 3000'))