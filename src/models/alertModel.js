const mongoose = require('mongoose')


const alertSchema = new mongoose.Schema({

    Title: {
        type: String, 
        required: true, 
    },
    Time: {
        type: Date,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    Type: {
        type: String,
        enum: ["Level 1", "Level 2", "Level 3"]
    }
   

}, {timestamps: true})

module.exports = mongoose.model("alert", alertSchema)