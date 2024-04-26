const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: String,
  age: Number
});



const model = mongoose.model('user', dataSchema);

module.exports = model;
