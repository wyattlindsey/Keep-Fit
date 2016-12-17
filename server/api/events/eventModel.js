const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  workoutId: mongoose.Schema.ObjectId,  // optional at this point
  timestamp: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000)
  }
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;