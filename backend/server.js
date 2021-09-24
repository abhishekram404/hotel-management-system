const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

console.log(process.env.MONGO_LOCAL_URI);
const app = express();
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
dotenv.config();

mongoose.connect(
  process.env.MONGO_LOCAL_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to DB");
  }
);

app.use("/api", routes);
// app.use("/api/", userRoute);
app.listen(4000);
