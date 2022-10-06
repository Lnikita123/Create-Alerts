const express= require('express')
const router = express.Router()

 const AlertController=  require("../controllers/alertController")

 router.post("/alert", AlertController.createAlert)
 router.delete("/deleteAlert", AlertController.deleteButton)

module.exports= router ;