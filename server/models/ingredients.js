const mongoose = require('mongoose');

const { Schema } = mongoose;

const ingredientsSchema = new Schema({
  bacon: String,
  cheese: String,
  meat: String,
  salad: String
});

module.exports = mongoose.model('Ingredients', ingredientsSchema);
