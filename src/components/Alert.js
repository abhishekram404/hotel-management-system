import React from "react";

export default function Alert({ message, close }) {
  return (
    <div className="alert-cont bg-light p-2 rounded">
      <button
        type="button"
        class="btn-close float-end"
        aria-label="Close"
        onClick={() => {
          close(false);
        }}
      ></button>
      <div className="alert">
        <div className="header">
          <strong className="bg-light me-auto text-success">
            Hotel Management System
          </strong>
        </div>
        <hr />
        <div className="body">{message}</div>
      </div>
    </div>
  );
}
