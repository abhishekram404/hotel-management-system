import React from "react";

export default function FirstPage() {
  return (
    <>
      <div className="first-page">
        <div className="content"></div>
        <div className="layer">
          <div className="wrapper">
            <h1 className="quote">A place sacred to your wellbeing.</h1>
            <p className="paragraph">
              Grab a place for some exquisite fun in your favorite cities.{" "}
            </p>
            <a
              href="#second-page"
              className="btn btn-danger px-3 py-2"
              id="book-now"
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
