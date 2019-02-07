const Order = require('../models/order');
const Ingredients = require('../models/ingredients');

exports.getIngredients = (req, res) => {
  Ingredients.find()
    .then(ingredients => {
      res.send(ingredients);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postOrder = (req, res) => {
  const { ingredients, totalPrice, customer, deliveryMethod } = req.body;
  const order = new Order({
    ingredients,
    totalPrice,
    customer,
    deliveryMethod
  });
  order
    .save()
    .then(response => res.send(response))
    .catch(err => console.log(err));
};
