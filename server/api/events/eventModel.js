const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  workoutId: mongoose.Schema.ObjectId  // optional at this point
}, {
  timestamps: true
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;