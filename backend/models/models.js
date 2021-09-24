// const { number } = require("joi");
const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  firstName: {
    type: String,
    // required: true,
    minLength: 3,
    maxLength: 60,
    trim: true,
  },
  lastName: {
    type: String,
    // required: true,
    minLength: 3,
    maxLength: 60,
    trim: true,
  },

  email: { type: String, trim: true, lowercase: true, unique: true },

  phone: {
    type: String,
    maxLength: 10,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  idType: {
    type: String,
    enum: ["citizenship", "driving_license"],
    // required: true,
  },
  idNumber: {
    type: String,
    trim: true,
  },
  room: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
});

const Customer = mongoose.model("Customer", customerSchema);

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
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
module.exports = Customer;
