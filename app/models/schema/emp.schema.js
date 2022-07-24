const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    empName: { type: String },
    department: { type: String },
    salary: { type: Number }

}, {
    timestamps: true
})


module.exports = mongoose.model("emp", empSchema)