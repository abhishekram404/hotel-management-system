import React from "react";
import clsx from "clsx";
import room1 from "../assets/room1.jpg";
export default function SecondPage() {
  return (
    <div className="second-page" id="second-page">
      <h1 className="text-center">Rooms</h1>
      <br />
      <div className="rooms-grid">
        <Room deluxe={true} />
        <Room />
        <Room deluxe={true} />
        <Room />
        <Room deluxe={true} />
        <Room />
        <Room deluxe={true} />
        <Room />
      </div>
    </div>
  );
}

const Room = ({ deluxe }) => {
  return (
    <div className="room">
      <div className="img-cont">
        {deluxe && <div className="deluxe">deluxe</div>}
        <img src={room1} alt="room" />
      </div>
      <button className="btn btn-danger">Book now</button>
    </div>
  );
};
