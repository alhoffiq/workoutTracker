const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the workout"
  },
  type: {
    type: String,
    required: "Enter a type of workout"
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
    required: "Enter a duration in minutes"
  },
  distance: {
    type: Number,
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
