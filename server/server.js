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

app.get('/api/book/:id', (req, res) => {
  let id = req.params.id;

  Book.findById(id, (err, item) => {
    if (err) {
      res.status(400).send(err);
    }

    res.send(item);
  });
});

app.get('/api/books', (req, res) => {
  const skip = parseInt(req.query.skip, 10);
  const limit = parseInt(req.query.limit, 10);
  const order = req.query.order;

  Book.find()
    .skip(skip)
    .sort({
      _id: order
    })
    .limit(limit)
    .exec((err, items) => {
      if (err) {
        res.status(400).send(err);
      }

      res.send(items);
    });
});

app.post('/api/book', (req, res) => {
  const book = new Book(req.body);

  book.save((err, item) => {
    if (err) return res.status(400).send(err);

    res.status(200).json({
      post: true,
      bookId: item._id
    });
  });
});

app.post('/api/book/:id', (req, res) => {
  const id = req.params.id;

  Book.findByIdAndUpdate(id, req.body, { new: true }, (err, item) => {
    if (err) {
      res.status(400).send(err);
    }

    res.json({
      success: true,
      item
    });
  });
});

app.delete('/api/book/:id', (req, res) => {
  const id = req.params.id;

  Book.findByIdAndRemove(id, (err, item) => {
    if (err) {
      res.status(400).send(err);
    }

    res.json({
      deleted: true
    });
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
