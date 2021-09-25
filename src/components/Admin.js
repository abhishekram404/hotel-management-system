import React, { useState } from "react";
import "../styles/sidebar.scss";
import "../styles/admin.scss";
import Dashboard from "./Dashboard";
import { AiOutlineDownCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { send_room_add_request } from "../redux/actions/roomActions";
import clsx from "clsx";
export default function Admin() {
  const dispatch = useDispatch();
  const [activeForm, setActiveForm] = useState({ component: CheckOut });
  return (
    <div className="admin">
      <div className="sidebar p-3">
        <h3 className="text-center">Admin </h3>
        <hr />
        <div className="options w-75">
          <div
            className={clsx(
              "option",
              activeForm.component == Dashboard && "active"
            )}
            onClick={() => setActiveForm({ component: Dashboard })}
          >
            Dashboard
          </div>
          <hr />
          <div
            className={clsx(
              "option",
              activeForm.component == AddARoom && "active"
            )}
            onClick={() => setActiveForm({ component: AddARoom })}
          >
            Add a room
          </div>
          <hr />
          <div
            className={clsx(
              "option",
              activeForm.component == CheckIn && "active"
            )}
            onClick={() => setActiveForm({ component: CheckIn })}
          >
            Check In
          </div>
          <hr />
          <div
            className={clsx(
              "option",
              activeForm.component == CheckOut && "active"
            )}
            onClick={() => setActiveForm({ component: CheckOut })}
          >
            Check Out
          </div>
          <hr />
          <div
            className={clsx(
              "option",
              activeForm.component == AddEmployee && "active"
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
  );
}

const AddARoom = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    roomNumber: undefined,
    capacity: undefined,
    category: undefined,
    price: undefined,
    beds: undefined,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(send_room_add_request(formData));
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
        <div className="mb-3">
          <button type="submit" className="btn btn-primary float-end">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

const CheckIn = () => {
  const [guestExpanded, setGuestExpanded] = useState(true);
  const [identificationExpanded, setIdentificationExpanded] = useState(false);
  const [rateExpanded, setRateExpanded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    email: "",
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
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={formData.email}
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
              <select id="id-type" className="form-select">
                <option selected value="citizenship">
                  Citizenship
                </option>
                <option value="driving-license">Driving License</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="id-number" className="form-label">
                ID Number
              </label>
              <input type="text" id="id-number" className="form-control" />
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
              <input type="number" className="form-control" />
            </div>
            <div className="row mb-3">
              <label htmlFor="" className="form-label">
                Range of date
              </label>
              <div className="col">
                <label htmlFor="vehicle-model" className="form-label">
                  From
                </label>
                <input type="date" id="date-from" className="form-control" />
              </div>
              <div className="col">
                <label htmlFor="vehicle-model" className="form-label">
                  To
                </label>
                <input type="date" id="date-to" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="adults-no" className="form-label">
                  No. of adults
                </label>
                <input type="number" id="adults-no" className="form-control" />
              </div>
              <div className="col">
                <label htmlFor="children-no" className="form-label">
                  No. of children
                </label>
                <input
                  type="number"
                  id="children-no"
                  className="form-control"
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
              ></textarea>
            </div>
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
  return (
    <div className="admin-form check-out">
      <h2>Check Out</h2>
      <hr />
      <h6>Enter the room number that you want to check-out</h6>
      <form action="">
        <div className="mb-3">
          <label htmlFor="roomNumber" className="form-label">
            Room number
          </label>
          <input type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-danger float-end">
          Check Out
        </button>
      </form>
    </div>
  );
};
const AddEmployee = () => {
  return (
    <div className="admin-form add-employee">
      <h1>Add Employee</h1>
      <hr />
      <form action="">
        <div className="mb-3">
          <label htmlFor="employee-name" className="form-label">
            Employee Name
          </label>
          <input type="text" id="employee-name" className="form-control" />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="father-name" className="form-label">
              Father's Name
            </label>
            <input type="text" id="father-name" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="mother-name" className="form-label">
              Mother's Name
            </label>
            <input type="text" id="mother-name" className="form-control" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input type="number" id="phone" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="address-perm" className="form-label">
              Permanent Address
            </label>
            <input type="text" id="address-perm" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="address-current" className="form-label">
              Current Address
            </label>
            <input type="text" id="address-current" className="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <div className="row">
            <div className="col">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input type="date" className="form-control" />
            </div>
            <div className="col">
              <label htmlFor="national-id-no" className="form-label">
                National ID no.
              </label>
              <input
                type="number"
                className="form-control"
                id="national-id-no"
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
            />
          </div>
          {/* </div> */}
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary float-end">
            Add employee
          </button>
        </div>
      </form>
    </div>
  );
};
