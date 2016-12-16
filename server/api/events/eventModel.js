const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  workoutId: mongoose.Schema.ObjectId
}, {
  timestamps: true
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;