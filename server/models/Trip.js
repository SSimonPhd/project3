const { Schema, model } = require('mongoose');

const tripSchema = new Schema({
  location: {
    type: String,
    required: true,
    trim: true,
  },
  note: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;