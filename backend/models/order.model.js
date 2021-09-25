const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orderBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Customer",
  },
  roomBooked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Room",
    },
  ],
  dateIn: { type: Date, required: true },
  dateOut: { type: Date, required: true },
  numberOfAdults: { type: Number },
  numberOfChildren: { type: Number },
  notes: { type: String, max: 200 },
  completed: { type: Boolean, default: false },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
