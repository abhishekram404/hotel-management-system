const router = require("express").Router();
const Room = require("../models/room.model");
const Customer = require("../models/customer.model");
const Order = require("../models/order.model");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Employee = require("../models/employee.model");
router.get("/all", auth, async (req, res) => {
  try {
    const customers = await Customer.find({});
    const orders = await Order.find({});
    const rooms = await Room.find({});
    const employees = await Employee.find({});

    res.cookie("isUserLoggedIn", true, {
      secure: false,
      httpOnly: false,
      maxAge: 1000000000,
    });
    res.status(200).send({
      type: "data",
      message: "Data fetched successfully.",
      isUserLoggedIn: true,
      details: {
        customers,
        orders,
        rooms,
        employees,
      },
    });
  } catch (err) {
    res.status(500).send({
      type: "error",
      message: "Data fetch failed.",
      isUserLoggedIn: false,
      details: {
        err,
      },
    });
  }
});

// Add room
router.post("/add-room", auth, async (req, res) => {
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
    return res.status(200).send({
      type: "data",
      details: {},
      message: "Room created",
    });
  } catch (err) {
    res.status(500).send({
      type: "error",
      details: err,
      message: "Something went wrong!",
    });
  }
});

// Check In
router.post("/check-in", auth, async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      country,
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
    const r = await Room.findOne({ roomNumber: roomNumber });

    // check if the room number exists
    if (!r) {
      return res
        .send({
          type: "error",
          details: {},
          message: `The given room number was not found.`,
        })
        .status(400);
    }
    // check if the room is available

    if (r.isBooked) {
      return res.status(400).send({
        type: "error",
        details: {},
        message: `Room ${r.roomNumber} is not available`,
      });
    }

    // create the customer
    const customer = await Customer.create({
      firstName,
      lastName,
      phone,
      address,
      country,
      company,
      idType,
      idNumber,
    });

    // create order and send it in response to the client
    const order = await Order.create({
      orderBy: customer._id,
      dateIn,
      dateOut,
      numberOfAdults,
      numberOfChildren,
      notes,
      roomBooked: r._id,
    });

    // find the rooms and book
    await Room.findOneAndUpdate(
      { roomNumber: roomNumber },
      {
        isBooked: true,
      }
    );

    return res.status(200).send({
      type: "data",
      details: order,
      message: "Order placed successfully.",
    });
  } catch (err) {
    return res.status(500).send({
      type: "error",
      details: err,
      message: "Something went wrong!",
    });
  }
});

// Check Out
router.post("/check-out", auth, async (req, res) => {
  try {
    const { roomNumber } = await req.body;

    const foundRoom = await Room.findOne({ roomNumber });

    // return;
    if (!foundRoom) {
      return res.send({
        type: "error",
        details: {},
        message: "The entered room number doesn't exist.",
      });
    }
    const { _id: foundRoomId } = await foundRoom;

    // return;
    const placedOrder = await Order.findOneAndUpdate(
      { roomBooked: foundRoomId },
      { completed: true }
    );
    await Room.findOneAndUpdate({ roomNumber }, { isBooked: false });

    return res
      .send({
        type: "data",
        details: placedOrder,
        message: "Check-out successful.",
      })
      .status(200);
  } catch (err) {
    return res.status(500).send({
      type: "error",
      details: err,
      message: "Something went wrong!",
    });
  }
});



router.post("/login", async (req, res) => {
  try {
    const { username, password } = await req.body;

    if (username === "admin" && password === "admin123") {
      const token = await jwt.sign({ username }, "JWTSUPERSECRETKEY", {
        expiresIn: 1000000000,
      });
      res.cookie("jwt", token, {
        secure: false,
        httpOnly: true,
        maxAge: 1000000000,
      });
      res.cookie("isUserLoggedIn", true, {
        secure: false,
        httpOnly: false,
        maxAge: 1000000000,
      });

      return res.send({
        type: "data",
        isUserLoggedIn: true,
        message: "Login successful",
        details: {},
      });
    }

    res.clearCookie("jwt");
    res.cookie("isUserLoggedIn", false, {
      secure: false,
      httpOnly: false,
      maxAge: 1000000000,
    });
    res.send({
      type: "error",
      isUserLoggedIn: false,
      message: "Wrong username/password",
      details: {},
    });
  } catch (err) {
    res.clearCookie("jwt");
    res.cookie("isUserLoggedIn", false, {
      secure: false,
      httpOnly: false,
      maxAge: 1000000000,
    });
    res.send({
      type: "error",
      isUserLoggedIn: false,
      message: "Login failed",
      details: err,
    });
  }
});

router.post("/logout", async (req, res) => {
  res.clearCookie("jwt");
  res.cookie("isUserLoggedIn", false, {
    secure: false,
    httpOnly: false,
    maxAge: 1000000000,
  });
  return res.send({
    type: "data",
    isUserLoggedIn: false,
    message: "Logged out",
    details: {},
  });
});

router.post("/add-employee", auth, async (req, res) => {
  try {
    const {
      name,
      fatherName,
      motherName,
      phone,
      address_perm,
      address_curr,
      dob,
      idNumber,
      gender,
    } = await req.body;

    const employee = await Employee.create({
      name,
      fatherName,
      motherName,
      phone,
      address_perm,
      address_curr,
      dob,
      idNumber,
      gender,
    });

    return res.status(200).send({
      type: "data",
      details: employee,
      message: "Employee added successfully.",
    });
  } catch (err) {
    return res.status(500).send({
      type: "error",
      details: err,
      message: "Something went wrong!",
    });
  }
});

module.exports = router;
