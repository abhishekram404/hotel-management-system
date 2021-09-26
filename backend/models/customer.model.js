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
  //   order: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
