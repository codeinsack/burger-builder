const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const homeController = require('./controllers/home');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', homeController.getIngredients);

app.post('/', homeController.postOrder);

mongoose
  .connect(
    'mongodb+srv://codeInSack:7qOP8gNgbVVHlpgH@cluster0-rkojo.mongodb.net/burger?retryWrites=true',
    { useNewUrlParser: true }
  )
  .then(() => app.listen(3000))
  .catch(err => console.log(err));
