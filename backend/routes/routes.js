const router = require("express").Router();
const Room = require("../models/models");
router.post("/room", async (req, res) => {
  const { roomNumber, capacity, category, beds, price } = await req.body;

  Room.create({});
});

module.exports = router;
