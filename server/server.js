const express = require('express');
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(bookRoutes);
app.use(userRoutes);

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
