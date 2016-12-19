const User = require('../users/userModel');
const Workout = require('./workoutModel');

module.exports = {
  getWorkouts: function (req, res, next) {
    User.findOne({
      _id: req.params.userId

    }, (err, user) => {
      if (err) {
        console.error('Error locating user', err);
        res.sendStatus(404)
      } else {
        res.json(user.workouts);
        next();
      }
    });
  },

  //Gets a single workout for a particular user
  getWorkout: function(req, res, next) {
    User.findOne({
      _id: req.params.userId

    }, (err, user) => {
      if (err) {
        console.error('Error finding user', err);
        res.sendStatus(404);
      } else {
        const workout = user.workouts.id(req.params.workoutId);
        if (!workout) {
          console.error('Error finding workout', err);
          res.sendStatus(404);
        } else {
          res.json(workout);
        }

        next();
      }
    });
  },

  addWorkout: function(req, res, next) {
    const newWorkout = new Workout(req.body);
    newWorkout.save((err) => {
      if (err) {
        console.error('Error adding workout', err);
        res.sendStatus(404);
      } else {
        User.findOne({
          _id: req.params.userId
        }, (err, user) => {
          if (err) {
            console.error('Error locating user', err);
            res.sendStatus(404)
          } else {
            user.workouts.push(newWorkout);
            user.save((err) => {
              if (err) {
                console.error('Error adding workout to user', err);
                res.sendStatus(404);
              } else {
                res.sendStatus(201);
              }

              next();
            });
          }
        });
      }
    });
  },

  updateWorkout: function(req, res, next) {
    User.findOne({
      _id: req.params.userId

    }, (err, user) => {
      if (err) {
        console.error('Error finding user', err);
        res.sendStatus(404);
      } else {
        const workout = user.workouts.id(req.params.workoutId);
        if (!workout) {
          console.error('Error finding workout', err);
          res.sendStatus(404);
          next();
        } else {
          Object.assign(workout, req.body);
          user.save((err) => {
            if (err) {
              console.error('Error updating workout', err);
              res.sendStatus(500);
            } else {
              res.sendStatus(204);
              next();
            }
          });
        }
      }
    });
  },

  deleteWorkout: function(req, res, next) {
    User.findOne({
      _id: req.params.userId

    }, (err, user) => {
      if (err) {
        console.error('Error finding user', err);
        res.sendStatus(404);
      } else {
        const workout = user.workouts.id(req.params.workoutId);
        if (!workout) {
          console.error('Error finding workout', err);
          res.sendStatus(404);
          next();
        } else {
          workout.remove();
          user.save((err) => {
            if (err) {
              console.error('Error saving changes', err);
              res.sendStatus(404);
            } else {
              res.sendStatus(204);
            }

            next();
          });
        }

      }
    });
  },

  getPendingWorkouts: function(req, res, next) {
    User.findOne({
      _id: req.params.userId

    }, (err, user) => {
      if (err) {
        console.error('Error finding user', err);
        res.sendStatus(404);
      } else {
        res.json(user.pending);
      }

      next();
    });
  },

  getPendingWorkout: function(req, res, next) {
    User.findOne({
      _id: req.params.userId

    }, (err, user) => {
      if (err) {
        console.error('Error finding user', err);
        res.sendStatus(404);
      } else {
        const pendingWorkout = user.pending.id(req.params.pendingWorkoutId);
        if (!pendingWorkout) {
          console.error('Error finding pending workout', err);
          res.sendStatus(404);
        } else {
          res.json(pendingWorkout);
        }

        next();
      }
    });
  },

  addPendingWorkout: function(req, res, next) {
    const newPendingWorkout = new Workout(req.body);
    newPendingWorkout.save((err) => {
      if (err) {
        console.error('Error adding pending workout', err);
        res.sendStatus(404);
      } else {
        User.findOne({
          _id: req.params.userId
        }, (err, user) => {
          if (err) {
            console.error('Error locating user', err);
            res.sendStatus(404)
          } else {
            user.pending.push(newPendingWorkout);
            user.save((err) => {
              if (err) {
                console.error('Error adding pending workout to user', err);
                res.sendStatus(404);
              } else {
                res.sendStatus(201);
              }

              next();
            });
          }
        });
      }
    });
  },

  deletePendingWorkout: function(req, res, next) {
    User.findOne({
      _id: req.params.userId

    }, (err, user) => {
      if (err) {
        console.error('Error finding user', err);
        res.sendStatus(404);
      } else {
        const pendingWorkout = user.pending.id(req.params.pendingWorkoutId);
        if (!pendingWorkout) {
          console.error('Error finding pending workout', err);
          res.sendStatus(404);
          next();
        } else {
          pendingWorkout.remove();
          user.save((err) => {
            if (err) {
              console.error('Error saving changes', err);
              res.sendStatus(404);
            } else {
              res.sendStatus(204);
            }

            next();
          });
        }

      }
    });
  }
};