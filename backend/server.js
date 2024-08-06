import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import 'dotenv/config'

//! app config
const app = express()

//! middleware
app.use(express.json())
app.use(cors({ origin: "*" }))

//! db connection
connectDB();

//! api endpoint
app.use('/api/food', foodRouter)                      //? all the API end points related to adding fooditems in the menu
app.use('/images', express.static('uploads'))         //* making the uploads folder global
app.use('/api/user', userRouter)                      //? the API end points related to user authentification 
app.use('/api/cart', cartRouter)                      //?

app.get('/', (req, res) => {
  res.send("API Working")
})

app.listen(5000, () => {
  console.log("Server is listening on http://localhost:5000")
})

// ch.tejamr Ganesh_2003
