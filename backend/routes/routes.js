const router = require("express").Router();
const Room = require("../models/room.model");
const Customer = require("../models/customer.model");
const Order = require("../models/order.model");
router.get("/", (req, res) => {
  res.send("Wohoooooo! It's working.");
});

// Add room
router.post("/add-room", async (req, res) => {
  console.log(req.body);
  try {
    const { roomNumber, capacity, category, beds, price } = await req.body;

    // check if the room already exists
    const doesExist = await Room.find({
      roomNumber,
    });

    if (doesExist.length > 0) {
      return res.status(400).send({
        type: "error",
        message: "Room number already exists.",
        details: {},
      });
    }

    const r = await Room.create({
      roomNumber,
      capacity,
      category,
      beds,
      price,
    });
    res.status(200).send({
      type: "data",
      details: {},
      message: "Room created",
    });
  } catch (err) {
    res.status(500).send({
      type: "error",
      details: {},
      message: "Something went wrong!",
    });
  }
});

// Check In
router.post("/check-in", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      country,
      email,
      phone,
      company,
      idType,
      idNumber,
      roomNumber,
      dateIn,
      dateOut,
      numberOfAdults,
      numberOfChildren,
      notes,
    } = await req.body;

    // find the rooms by roomNumber
    const r = await Room.find({ roomNumber: roomNumber });

    // check if the room number exists
    if (r.length < 1) {
      res
        .send({
          type: "error",
          details: {},
          message: `The given room numbers were not found.`,
        })
        .status(400);
    }
    // check if the room is available
    r.forEach((room) => {
      if (room.isBooked) {
        res.status(400).send({
          type: "error",
          details: {},
          message: `Room ${room.roomNumber} is not available`,
        });
        return;
      }
    });

    // find the rooms and book
    await Room.find({ roomNumber: roomNumber }).update({
      isBooked: true,
    });
    //  extract rooms  id's
    const roomsBooked = r.map((a) => a._id);

    // create the customer
    const customer = await Customer.create({
      firstName,
      lastName,
      email,
      phone,
      address,
      country,
      company,
      idType,
      idNumber,
    });

    // crate order and send it in response to the client
    const order = await Order.create({
      orderBy: customer._id,
      dateIn,
      dateOut,
      numberOfAdults,
      numberOfChildren,
      notes,
      roomBooked: roomsBooked,
    });
    res.status(200).send({
      type: "data",
      details: order,
      message: "Order placed successfully.",
    });
  } catch (err) {
    res.status(500).send({
      type: "error",
      details: err,
      message: "Something went wrong!",
    });
  }
});

router.post("/check-out", async (req, res) => {
  const { roomNumber } = await req.body;

  const { _id: foundRoomId } = await Room.findOne({ roomNumber });
  console.log(foundRoomId);
  // return;
  const placedOrder = await Order.findOneAndUpdate(
    { roomBooked: foundRoomId },
    { completed: true }
  );
  await Room.findOneAndUpdate({ roomNumber }, { isBooked: false });

  res
    .send({
      type: "data",
      details: placedOrder,
      message: "Check-out successful.",
    })
    .status(200);

  // const bookedRoom = await Room.find({ roomNumber }).update({
  //   isBooked: false,
  // });
});

// {
//    "firstName": "Abhishek",
//       "lastName": "Ram" ,
//       "address" : "Balkumari",
//       "country": "Nepal",
//       "email": "abhishekram@gmail.com",
//       "phone": "1234567890",
//       "company": "C company",
//       "idType": "citizenship",
//       "idNumber": "12345",
//       "roomNumber": [100,101],
//       "dateIn": "2020-11-22",
//       "dateOut": "2020-11-23",
//       "numberOfAdults": 3,
//       "numberOfChildren": 0,
//       "notes": "",
// }

module.exports = router;
