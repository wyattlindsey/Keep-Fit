var helper = require('./helper.js');
//var Promise = require('bluebird');
var server = require('./server');
var path = require('path');
var query = require('./db/query-modules.js');
// var bcrypt = require('bcrypt');

module.exports = {
  logIn: function (req, res, next) {

  },
  signUp: function (req, res, next) {
    // TODO: add salt and hash
    // generate salt
    // hash password + salt
    query.signUp(); // TODO pass in req.username or so
    next();
  },
  getUser: function (req, res, next) {
    // TODO submitWorkout should accept req.username
    // and send 200 if works
    query.getUser('Carl', function(data){
      res.send(data);
    });

  },
  submitWorkout: function (req, res, next) {
    // TODO submitWorkout should accept req.username
    // and send 200 if works
    query.submitWorkout();
    next();
  },
  createWorkout: function (req, res, next) {
    // parse req data to be: workoutName, exerciseName, exerciseDescription
    // possibly iterating through multiple exercises and
    // call query.createWorkout()
    query.createWorkout();
    next();
  },
  getWorkouts: function(req, res, next) {
    query.getWorkouts(req.headers.username, function(data) {
      res.send(data);
    })
  },
    submitExercise: function (req, res, next) {
      // TODO submitWorkout should accept req.workout
      // and send 200 if works
      query.submitExercise();
      next();
    },
    getExercises: function(req, res, next) {
      query.getExercises('All', function(data) {
        res.send(data);
      })
    }
};
