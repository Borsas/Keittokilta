const express = require("express")
const uploadController = require("./controllers/upload")

const app = express()

app.use("/upload", uploadController)

module.exports = app