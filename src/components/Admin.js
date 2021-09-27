import React, { useState, useEffect } from "react";
import "../styles/sidebar.scss";
import "../styles/admin.scss";
import Dashboard from "./Dashboard";
import { AiOutlineDownCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { send_room_add_request } from "../redux/actions/roomActions";
import send_check_in_request from "../redux/actions/orderActions";
import { send_check_out_request } from "../redux/actions/orderActions";
import clsx from "clsx";
import send_employee_add_request from "../redux/actions/employeeActions";

export default function Admin() {
  const [activeForm, setActiveForm] = useState({ component: Dashboard });
  return (
    <>
      <div className="admin">
        <div className="sidebar p-3">
          <h3 className="text-center">Admin </h3>
          <hr />
          <div className="options w-75">
            <div
              className={clsx(
                "option",
                activeForm.component === Dashboard && "active"
              )}
              onClick={() => setActiveForm({ component: Dashboard })}
            >
              Dashboard
            </div>
            <hr />
            <div
              className={clsx(
                "option",
                activeForm.component === AddARoom && "active"
              )}
              onClick={() => setActiveForm({ component: AddARoom })}
            >
              Add a room
            </div>
            <hr />
            <div
              className={clsx(
                "option",
                activeForm.component === CheckIn && "active"
              )}
              onClick={() => setActiveForm({ component: CheckIn })}
            >
              Check In
            </div>
            <hr />
            <div
              className={clsx(
                "option",
                activeForm.component === CheckOut && "active"
              )}
              onClick={() => setActiveForm({ component: CheckOut })}
            >
              Check Out
            </div>
            <hr />
            <div
              className={clsx(
                "option",
                activeForm.component === AddEmployee && "active"
              )}
              onClick={() => setActiveForm({ component: AddEmployee })}
            >
              Add Employee
            </div>
          </div>
        </div>

        <div className="admin-display-area">
          {activeForm.component && <activeForm.component />}
        </div>
      </div>
    </>
  );
}

const AddARoom = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    roomNumber: "",
    capacity: "",
    category: "",
    price: "",
    beds: "",
  });

  const { rooms } = useSelector((state) => state.all.details);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(send_room_add_request(formData));
    setFormData({
      roomNumber: "",
      capacity: "",
      category: "",
      price: "",
      beds: "",
    });
  };

  return (
    <div className="admin-form add-a-room">
      <h2>Add/Update a room</h2>
      <hr />
      <form action="#" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="room-number" className="form-label">
            Room No :
          </label>
          <input
            type="number"
            className="form-control"
            name="roomNumber"
            id="room-number"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="capacity" className="form-label">
            Capacity
          </label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            name="capacity"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            type=""
            className="form-select"
            id="category"
            name="category"
            onChange={handleChange}
            required={true}
          >
            <option selected>Select a room category</option>
            <option value="deluxe">Deluxe</option>
            <option value="budget">Budget</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="beds" className="form-label">
            No. of beds
          </label>
          <input
            type="number"
            className="form-control"
            id="beds"
            name="beds"
            onChange={handleChange}
            required={true}
          />
        </div>
        {Object.keys(rooms).length > 0 && (
          <div
            className={clsx(
              "mb-3 form-text fw-bold",
              rooms.type === "error" ? "text-danger" : "text-success"
            )}
          >
            {rooms.message}
          </div>
        )}
        <div className="mb-3">
          <button type="submit" className="btn btn-primary float-end">
            Add room
          </button>
        </div>
      </form>
    </div>
  );
};

const CheckIn = () => {
  const dispatch = useDispatch();
  const [guestExpanded, setGuestExpanded] = useState(true);
  const [identificationExpanded, setIdentificationExpanded] = useState(false);
  const [rateExpanded, setRateExpanded] = useState(false);
  const { orders } = useSelector((state) => state.all.details);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    phone: "",
    company: "",
    idType: "",
    idNumber: "",
    roomNumber: [],
    dateIn: "",
    dateOut: "",
    numberOfAdults: "",
    numberOfChildren: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(send_check_in_request(formData));
  };

  return (
    <div className="admin-form check-in">
      <h2>Check In</h2>
      <hr />
      <form
        className="card p-3  guest-information"
        onSubmit={(e) => {
          e.preventDefault();
          setIdentificationExpanded(true);
        }}
      >
        <div
          className="expand-btn"
          onClick={() => setGuestExpanded(!guestExpanded)}
        >
          <span>Guest Information</span>
          <AiOutlineDownCircle />
        </div>
        {guestExpanded && (
          <>
            <br />
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  value={formData.firstName}
                  name="firstName"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="col">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  value={formData.lastName}
                  name="lastName"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="form-control"
                value={formData.address}
                name="address"
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="form-control"
                value={formData.country}
                name="country"
                onChange={handleChange}
                required={true}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="form-control"
                value={formData.phone}
                name="phone"
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="company" className="form-label">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="form-control"
                value={formData.company}
                name="company"
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="">
              <button type="submit" className="btn btn-success float-end">
                Next
              </button>
            </div>
          </>
        )}
      </form>
      <br />
      <form
        className="card p-3  identification-information"
        onSubmit={(e) => {
          e.preventDefault();
          setRateExpanded(true);
        }}
      >
        <div
          className=" expand-btn"
          onClick={() => setIdentificationExpanded(!identificationExpanded)}
        >
          <span>Identification Information</span>
          <AiOutlineDownCircle />
        </div>
        {identificationExpanded && (
          <>
            <br />

            <div className="mb-3">
              <label htmlFor="id-type" className="form-label">
                ID Type
              </label>
              <select
                id="id-type"
                className="form-select"
                name="idType"
                value={formData.idType}
                onChange={handleChange}
                required={true}
              >
                <option selected> Select an ID type </option>
                <option value="citizenship">Citizenship</option>
                <option value="driving_license">Driving License</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="id-number" className="form-label">
                ID Number
              </label>
              <input
                type="text"
                id="id-number"
                className="form-control"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div className="">
              <button type="submit" className="btn btn-success float-end">
                Next
              </button>
            </div>
          </>
        )}
      </form>

      <br />
      <form
        className="card p-3  rate-information"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div
          className=" expand-btn"
          onClick={() => setRateExpanded(!rateExpanded)}
        >
          <span>Rate Information</span>
          <AiOutlineDownCircle />
        </div>
        {rateExpanded && (
          <>
            <br />

            <div className="mb-3">
              <label htmlFor="room-no" className="form-label">
                Room No.
              </label>
              <input
                type="number"
                className="form-control"
                value={formData.roomNumber}
                name="roomNumber"
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="" className="form-label">
                Range of date
              </label>
              <div className="col">
                <label htmlFor="dateIn" className="form-label">
                  From
                </label>
                <input
                  type="date"
                  id="dateIn"
                  className="form-control"
                  value={formData.dataIn}
                  name="dateIn"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="col">
                <label htmlFor="dateOut" className="form-label">
                  To
                </label>
                <input
                  type="date"
                  id="dateOut"
                  className="form-control"
                  value={formData.dateOut}
                  name="dateOut"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="adults-no" className="form-label">
                  No. of adults
                </label>
                <input
                  type="number"
                  id="adults-no"
                  className="form-control"
                  value={formData.numberOfAdults}
                  name="numberOfAdults"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="col">
                <label htmlFor="children-no" className="form-label">
                  No. of children
                </label>
                <input
                  type="number"
                  id="children-no"
                  className="form-control"
                  value={formData.numberOfChildren}
                  name="numberOfChildren"
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="notes" className="form-label">
                Notes
              </label>
              <textarea
                name="notes"
                id=""
                cols="30"
                rows="5"
                className="form-control"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>
            {Object.keys(orders).length > 0 && (
              <div
                className={clsx(
                  "mb-3 form-text fw-bold",
                  orders.type === "error" ? "text-danger" : "text-success"
                )}
              >
                {orders.message}
              </div>
            )}
            <div className="">
              <button type="submit" className="btn btn-success float-end">
                Check In
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
const CheckOut = () => {
  const dispatch = useDispatch();
  const [roomNumber, setRoomNumber] = useState({
    roomNumber: "",
  });

  const { checkOut } = useSelector((state) => state.all.details);
  const handleChange = (e) => {
    setRoomNumber({
      ...roomNumber,
      roomNumber: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(send_check_out_request(roomNumber));
  };
  return (
    <div className="admin-form check-out">
      <h2>Check Out</h2>
      <hr />
      <h6>Enter the room number that you want to check-out</h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="roomNumber" className="form-label">
            Room number
          </label>
          <input
            type="number"
            className="form-control"
            value={roomNumber.roomNumber}
            onChange={handleChange}
            required={true}
          />
        </div>
        {Object.keys(checkOut).length > 0 && (
          <div
            className={clsx(
              "mb-3 form-text fw-bold",
              checkOut.type === "error" ? "text-danger" : "text-success"
            )}
          >
            {checkOut.message}
          </div>
        )}
        <button type="submit" className="btn btn-danger float-end">
          Check Out
        </button>
      </form>
    </div>
  );
};

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    phone: "",
    address_perm: "",
    address_curr: "",
    dob: "",
    idNumber: "",
    gender: "",
  });
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.all.details);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(send_employee_add_request(formData));
    setFormData({
      name: "",
      fatherName: "",
      motherName: "",
      phone: "",
      address_perm: "",
      address_curr: "",
      dob: "",
      idNumber: "",
      gender: "",
    });
  };

  return (
    <div className="admin-form add-employee">
      <h1>Add Employee</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="employee-name" className="form-label">
            Employee Name
          </label>
          <input
            type="text"
            id="employee-name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            name="name"
            required={true}
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="father-name" className="form-label">
              Father's Name
            </label>
            <input
              type="text"
              id="father-name"
              className="form-control"
              value={formData.fatherName}
              onChange={handleChange}
              name="fatherName"
              required={true}
            />
          </div>
          <div className="col">
            <label htmlFor="mother-name" className="form-label">
              Mother's Name
            </label>
            <input
              type="text"
              id="mother-name"
              className="form-control"
              value={formData.motherName}
              onChange={handleChange}
              name="motherName"
              required={true}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            required={true}
          />
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor="address-perm" className="form-label">
              Permanent Address
            </label>
            <input
              type="text"
              id="address-perm"
              className="form-control"
              value={formData.address_perm}
              onChange={handleChange}
              name="address_perm"
              required={true}
            />
          </div>
          <div className="col">
            <label htmlFor="address-current" className="form-label">
              Current Address
            </label>
            <input
              type="text"
              id="address-current"
              className="form-control"
              value={formData.address_curr}
              onChange={handleChange}
              name="address_curr"
              required={true}
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="row">
            <div className="col">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                value={formData.dob}
                onChange={handleChange}
                name="dob"
                required={true}
              />
            </div>
            <div className="col">
              <label htmlFor="national-id-no" className="form-label">
                National ID no.
              </label>
              <input
                type="number"
                className="form-control"
                id="national-id-no"
                value={formData.idNumber}
                onChange={handleChange}
                name="idNumber"
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          {/* <div className="row"> */}
          <div className="form-check">
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              id="male"
              className="form-check-input"
              onChange={handleChange}
              value="male"
              required={true}
            />
          </div>
          <div className="form-check">
            <label htmlFor="female" className="form-check-label">
              Female
            </label>
            <input
              type="radio"
              name="gender"
              id="female"
              className="form-check-input"
              onChange={handleChange}
              value="female"
              required={true}
            />
          </div>
          {/* </div> */}
        </div>
        {Object.keys(employees).length > 0 && (
          <div
            className={clsx(
              "mb-3 form-text fw-bold",
              employees.type === "error" ? "text-danger" : "text-success"
            )}
          >
            {employees.message}
          </div>
        )}
        <div className="mb-3">
          <button type="submit" className="btn btn-primary float-end">
            Add employee
          </button>
        </div>
      </form>
    </div>
  );
};
