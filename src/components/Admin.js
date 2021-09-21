import React from "react";
import Sidebar from "./Sidebar";
import { Router, Switch, Link } from "react-router-dom";
import "../styles/admin.scss";
export default function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin-display-area">
        {/* <Router>
          <Switch></Switch>
        </Router> */}
      </div>
    </div>
  );
}
