var helper = require('./helper.js');
//var Promise = require('bluebird');
var server = require('./server');
var path = require('path');
var query = require('./db/query-modules.js');
// var bcrypt = require('bcrypt');

module.exports = {
  logIn: function (req, res, next) {},
  signUp: function (req, res, next) {
    // TODO: add salt and hash
    console.log('RequestHandler username');
    query.signUp('Sample');
    console.log('RequestHandler after sign-up');
  },
  getUser: function (req, res, next) {
    // TODO submitWorkout should send 200 if it works
    query.getUser(req.headers.username, function(data){
      res.send(data);
    });
  },
  submitWorkout: function (req, res, next) {
    // TODO submitWorkout should send 200 if works
    // confirm submitWorkout inputs below

    query.submitWorkout(req.headers.username, req.headers.workoutName);
    res.sendStatus(201);
  },
  createWorkout: function (req, res, next) {
    // parse req data to be: workoutName, exerciseName, exerciseDescription
    // possibly iterating through multiple exercises and
    // call query.createWorkout()
    // userName, workoutName, exerciseName, weight, reps
   console.log(req.body);
    var userName = "Sample";
    var workoutName = req.body.workoutName;
    req.body.exercises.forEach(i=>{
      var exerciseName = i.exercise;
      var weight = i.weight;
      var reps = i.reps;
      query.createWorkout(userName, workoutName, exerciseName, weight, reps);
    });
    // query.createWorkout(userName, workoutName, 'exerciseName', 5, 10);
    // res.head(201);
    res.send("Everything's cool!");
    // next();

  },
  getWorkouts: function(req, res, next) {

    // var username = req.headers.username;
    query.getWorkouts(function(data) {

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
