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

app.use(express.static('client/build'));

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

if (process.env.NODE_ENV === 'production') {
  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
