var helper = require('./helper.js');
var Promise = require('bluebird');
var server = require('./server');
var path = require('path');
var query = require('./db/query-modules.js');
// var bcrypt = require('bcrypt');

module.exports = {
  logIn: function (req, res, next) {

  },
  signUp: function (req, res, next) {
    // TODO: add salt and hash
    // var cipher = Promise.promisify(bcrypt.hash);

    // return cipher(req.password, null, null).bind(this)
    //   .then(function(hash) {
    //    this.password = hash;
    //    //assume that this is async
    //    next();
    //  });

    // generate salt
    // hash password + salt
    query.signUp();
    next();
  },
  getUser: function (req, res, next) {
    // convert to array syntax
    // call a query
    console.log(req.url);
    // query.getUser('Carl', function(data){
    //   res.send(data);
    // });

  },
  submitWorkout: function (req, res, next) {
    query.submitWorkout();
    res.sendStatus(201);
    //next();
  },
  getWorkouts: function(req, res, next) {
    var username = req.headers.username;
    query.getWorkouts(username, function(data) {
      res.send(data);
    })
  },
    submitExercise: function (req, res, next) {
      query.submitExercise();
      next();
    },
    getExercises: function(req, res, next) {
      query.getExercises('All', function(data) {
        res.send(data);
      })
    }
//   getIndex: function (req, res, next) {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
//     res.status(200);
//   }
};
