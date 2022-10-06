const { timeStamp } = require("console");
const alertModel = require("../models/alertModel");
const moment= require("moment")

const createAlert = async function (req, res){
    try{
       let data = req.body
        const {Title, Time, date, Type}= data

        if (!Title){
            return res.status(400).send({status: false, msg: "Please provide Title."})
        }


        if (!Type){
            return res.status(400).send({status: false, msg: "Please provide Type."})
        }
        //console.log(moment().format('LL'));
// for the creation of timestamp and date.
        const dateNow = new Date();
       // console.log(today.getUTCDate())
        let createAlert = {
            Title: Title,
            Type: Type,
            date: Date.now(),
            Time: new Date(dateNow.setDate(dateNow.getDate() + 14)).toISOString(),
        }

        let saveData= await alertModel.create(createAlert)
        res.status(201).send({status: true, msg: "successfully created", data: saveData})
    }
    catch(err){
        console.log(err)
        res.status(500).send({status:false, msg: err.message})
    }
}

const deleteButton = async function (req, res) {
    try {
      let Title = req.body.Title
      
  
      if (!Title) {
        return res.status(400).send({ status: false, message: `Title no is required` });
      }

      const user= await alertModel.deleteOne({Title:Title})
      return res.status(200).send({status: true,message: "successfully deleted the student",data:user});
    }
    catch (err){
        console.log(err)
      res.status(500).send({
        status: false,
        Error: err.message,
      });
    }
}

module.exports.createAlert=createAlert;
module.exports.deleteButton=deleteButton;