var helper = require('./helper.js');
var Promise = require('bluebird');
var server = require('./server');
var path = require('path');
var query = require('./db/query-modules.js');

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
    return query.addUser(req.username);
  },
  getUser: function (req, res, next) {
    // convert to array syntax
    // call a query
    Promise.promisify(query.getUser);
    query.getUser(req.body.username).then(function(data){
      return res;
    })

  }
//   getIndex: function (req, res, next) {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
//     res.status(200);
//   }
};
