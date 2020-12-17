const uploadRouter = require("express").Router()
const multer = require("multer")
const CONFIG = require("../../config.json")

const upload = multer({dest: "../i/"})

uploadRouter.post("/", upload.single("sharex"), (req, res) => {
    const body = req.body
    
    if (body.secret !== CONFIG.secret) {
        return "Invalid secret key"
    }
    if (!req.file) {
        return "Image missing"
    }

    let extension = ""
    if (req.file.originalname.includes(".")) {
        extension = req.file.originalname.split(".")[1]

    }
    console.log(req.file)
    return req.protocol + "://" + req.hostname + req.file.path
})


module.exports = uploadRouter