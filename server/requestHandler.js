var helper = require('./helper.js');
var Promise = require('bluebird');
var server = require('./server');
var path = require('path');
var query = require('./db/query-modules.js');
// var bcrypt = require('bcrypt');

module.exports = {
  signUp: function (req, res, next) {

  },
  logIn: function (req, res, next) {

  },
  submitWorkout: function (req, res, next) {

  },
  getWorkouts: function (req, res, next) {

  },
  addUser: function (req, res, next) {
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
    query.addUser(req.username, 1, 1);
    res.statusCode(200);
  },
  getUser: function (req, res, next) {
    // convert to array syntax
    // call a query
    // Promise.promisify(query.getUser);
    console.log("R-H getUser")
    query.getUser('Carl', function(data){
      res.send(data);
    });

  }
//   getIndex: function (req, res, next) {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
//     res.status(200);
//   }
};
