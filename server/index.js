import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"

import postRoutes from "./routes/posts.js"

// server settings for express
const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
// put cors up to routers
app.use(cors())

// remove cors policy
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(cors({ origin: true }))

app.use("/posts", postRoutes)

// mongo config
dotenv.config()
const { DB_USER, DB_PASSWORD, DB_ENDPOINT, DB_NAME } = process.env
const CONNECTION_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_ENDPOINT}/${DB_NAME}?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000
console.log(DB_USER)

// connecting
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("server running")))
  .catch((err) => console.log(err.message))
// don't get any warning into the console.
mongoose.set("useFindAndModify", false)
