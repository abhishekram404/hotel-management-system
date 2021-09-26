const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
    minLength: 3,
    maxLength: 100,
    trim: true,
  },
  fatherName: {
    type: String,
    // required: true,
    minLength: 3,
    maxLength: 100,
    trim: true,
  },
  motherName: {
    type: String,
    // required: true,
    minLength: 3,
    maxLength: 100,
    trim: true,
  },
  phone: {
    type: String,
    maxLength: 14,
    trim: true,
  },
  address_perm: {
    type: String,
    trim: true,
  },
  address_curr: {
    type: String,
    trim: true,
  },
  dob: {
    type: Date,
    trim: true,
  },

  idNumber: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },

  //   order: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
