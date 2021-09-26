const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: { type: String, min: 3, required: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
