var helper = require('./helper.js');
//var Promise = require('bluebird');
var server = require('./server');
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

  },
  getIndex: function (req, res, next) {
    res.sendFile(path.join(__dirname, /*path to index page*/));
    res.status(200);
  }
};