const express = require('express');
const router = express.Router();
const { User } = require('./../models/user');
const { Book } = require('./../models/book');
const { auth } = require('./../middleware/auth');

router.get('/api/reviewer/:id', (req, res) => {
  const { id } = req.params;

  User.findById(id, (err, user) => {
    if (err) {
      return res.status(400).send(err);
    }

    res.json({
      name: user.name,
      lastname: user.lastname
    });
  });
});

router.get('/api/auth', auth, (req, res) => {
  res.json({
    isAuth: true,
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname
  });
});

router.get('/api/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(400).send(err);
    }

    res.status(200).send(users);
  });
});

router.get('/api/reviews/:id', (req, res) => {
  Book.find({
    ownerId: req.params.id
  }).exec((err, books) => {
    if (err) {
      return res.status(400).send(err);
    }

    res.send(books);
  });
});

router.get('/api/logout', auth, (req, res) => {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) {
      return res.status(400).send(err);
    }

    res.sendStatus(200);
  });
});

router.post('/api/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        isAuth: false,
        message: 'Auth failed, email not found'
      });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          isAuth: false,
          message: 'Wrong password'
        });
      }

      user.generateToken((err, user) => {
        if (err) {
          return res.status(400).send(err);
        }

        res.cookie('auth', user.token).json({
          isAuth: true,
          id: user._id,
          email: user.email
        });
      });
    });
  });
});

router.post('/api/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) {
      return res.json({
        success: false,
        err
      });
    }

    res.status(200).json({
      success: true,
      user
    });
  });
});

module.exports = router;
