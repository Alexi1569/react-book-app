const express = require('express');
const router = express.Router();
const { Book } = require('./../models/book');

router.get('/api/book/:id', (req, res) => {
  let id = req.params.id;

  Book.findById(id, (err, book) => {
    if (err) {
      return res.status(400).send(err);
    }

    res.send(book);
  });
});

router.get('/api/books', (req, res) => {
  const skip = parseInt(req.query.skip, 10);
  const limit = parseInt(req.query.limit, 10);
  const order = req.query.order;

  Book.find()
    .skip(skip)
    .sort({
      _id: order
    })
    .limit(limit)
    .exec((err, books) => {
      if (err) {
        return res.status(400).send(err);
      }

      res.send(books);
    });
});

router.post('/api/book', (req, res) => {
  const book = new Book(req.body);

  book.save((err, book) => {
    if (err) return res.status(400).send(err);

    res.status(200).json({
      post: true,
      bookId: book._id
    });
  });
});

router.post('/api/book/:id', (req, res) => {
  const id = req.params.id;

  Book.findByIdAndUpdate(id, req.body, { new: true }, (err, book) => {
    if (err) {
      return res.status(400).send(err);
    }

    res.json({
      success: true,
      book
    });
  });
});

router.delete('/api/book/:id', (req, res) => {
  const id = req.params.id;

  Book.findByIdAndRemove(id, (err, book) => {
    if (err) {
      return res.status(400).send(err);
    }

    res.json({
      deleted: true
    });
  });
});

module.exports = router;
