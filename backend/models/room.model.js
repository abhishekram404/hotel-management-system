const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  roomNumber: {
    type: Number,
    // required: true,
  },
  capacity: {
    type: Number,
    // required: true,
    min: 1,
  },
  category: {
    enum: ["deluxe", "budget"],
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  beds: {
    type: Number,
    // required: true,
  },
  isBooked: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
