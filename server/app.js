const express = require("express")
const cors = require("cors")

const logger = require("./logger")
const diaryRouter = require("./routers/diaries")

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)

app.use("/diaries", diaryRouter)

module.exports = app