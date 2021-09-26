import React from "react";

export default function About() {
  return (
    <div>
      <div className="container-fluid">
        <h2 className="text-center section-title mb-2 h1 p-4">ABOUT US </h2>
        <p className="text-center text-muted h5">
          Providing the better way of managing the hotels website utmost.{" "}
        </p>
        <div className="row mt-5">
          <div className="text-center col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="container">
              <div className="card-block block-1">
                <h3 className="card-title">Room Bookings</h3>
                <p className="card-text">
                  Provides easier and better way of managing rooms for
                  customers.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="container">
              <div className="card-block block-2">
                <h3 className="card-title">Room check-ins</h3>
                <p className="card-text">
                  Efficient tracking of customer room activities with less
                  complications.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="container">
              <div className="card-block block-3">
                <h3 className="card-title">Employee Data</h3>
                <p className="card-text">
                  Proper management of employee details and security
                  informations .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
