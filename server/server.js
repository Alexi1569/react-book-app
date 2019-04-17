const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);

const PORT = process.env.PORT || 3001;
const app = express();

const { User } = require('./models/user');
const { Book } = require('./models/book');

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

app.use(bodyParser.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
