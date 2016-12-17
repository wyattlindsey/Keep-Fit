const mongoose = require('mongoose');

const WorkoutSchema = mongoose.Schema({
  name: String,
  type: String,
  exercises: String
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;