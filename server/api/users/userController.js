const Promise = require('bluebird');
const User = require('./userModel');
//const jwt = require('jwt-simple');
//const session = require('express-session');
//var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;


//utility functions------------------------------------
///////////////////////////

var isLoggedIn = function(req) {
  return req.session ? !!req.session.user : false;
};

var checkUser = function(req, res, next){
  if (!isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};

///////////////////////////
//-----------------------------------------------------


module.exports = {
    signin: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username})
      .then(function(user) {
        if (!user) {
          res.redirect('/login');
        } else {
          bcrypt.compare(password, user.get('password'), function(err, match) {
            if (match) {
              var token = jwt.encode(user, 'secret');
              res.json({token: token});
            } else {
              res.redirect('/login');
            }
          });
        }
    });

  },

  signup: function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  User.create({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        bcrypt.hash(password, null, null, function(err, hash) {
          Users.create({
            username: username,
            password: hash
          }).then(function(user) {
              createSession(req, res, user);
          });
        });
      } else {
        console.log('Account already exists');
        res.redirect('/signup');
      }
    });
  },


  checkAuth: function (req, res, next) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token'));
    } else {
      var user = jwt.decode(token, 'secret');
      findUser({username: user.username})
        .then(function (foundUser) {
          if (foundUser) {
            res.send(200);
          } else {
            res.send(401);
          }
        })
        .fail(function (error) {
          next(error);
        });
    }
  },


  getUsers: function(req, res, next) {
    const searchParams = req.body;
    User.find(searchParams, (err, users) => {
      if (err) {
        console.error('Error getting users', err);
        res.sendStatus(404);
      } else {
        res.json(users);
      }

      next();
    });
  },

  updateUser: function(req, res, next) {
    User.findOne({
      _id: req.params.userId

    }, (err, user) => {
      if (err) {
        console.error('Error finding user', err);
        res.sendStatus(404);
      } else {
        Object.assign();
        user.save((err) => {
          if (err) {
            console.error('Error updating user', err);
            res.sendStatus(500);
          } else {
            res.sendStatus(204);
            next();
          }
        });
      }
    });
  },

  deleteUser: function(req, res, next) {
    User.remove({
      _id: req.params.userId

    }, (err, user) => {
      if (err) {
        console.error('Error deleting user', err);
      } else {
        res.sendStatus(204);
        next();
      }
    });
  },

  getUser: function(req, res, next) {
    User.findOne({
      _id: req.params.userId

    }, (err, user) => {
      if (err) {
        console.error('Error retrieving user', err);
        res.sendStatus(404);
      } else {
        res.json(user);
      }

      next();
    });
  },

  addUser: function(req, res, next) {
    const newUser = new User(req.body);
    newUser.save((err) => {
      if (err) {
        console.error('Error saving user', err);
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }

      next();
    });
  }

};