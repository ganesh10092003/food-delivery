import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
app.get('/', (req, res, next) => {
  res.send("HELLO WORLD")
})

app.listen(5000, () => {
  console.log("server is listening on port 5000")
})