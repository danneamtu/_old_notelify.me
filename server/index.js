import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"

// @initialize express
const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

// @remove cors error
app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(cors({ origin: true }))

// @config connection to mongodb
dotenv.config()
const { DB_USER, DB_PASSWORD, DB_ENDPOINT, DB_NAME } = process.env
const CONNECTION_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_ENDPOINT}/${DB_NAME}?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000
console.log(DB_USER)

// @connecting to mongodb
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("server running")))
  .catch((err) => console.log(err.message))
// don't get any warning into the console.
mongoose.set("useFindAndModify", false)
