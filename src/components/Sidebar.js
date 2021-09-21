import React from "react";
import "../styles/sidebar.scss";
export default function Sidebar() {
  return (
    <div className="sidebar p-3">
      <h3 className="text-center">Admin </h3>
      <hr />
      <div className="options w-75">
        <div className="option">Dashboard</div>
        <hr />
        <div className="option">Add a room</div>
        <hr />
        <div className="option">Check In</div>
        <hr />
        <div className="option">Check Out</div>
        <hr />
        <div className="option">Add Employee</div>
      </div>
    </div>
  );
}
