const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  ingredients: Array,
  totalPrice: Number,
  customer: {
    name: String,
    address: {
      street: String,
      zipCode: String,
      country: String
    },
    email: String
  },
  deliveryMethod: String
});

module.exports = mongoose.model('Order', orderSchema);
