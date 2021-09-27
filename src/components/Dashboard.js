import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/dashboard.scss";
import { useSelector } from "react-redux";
import moment from "moment";

export default function Dashboard() {
  const { rooms, orders, customers, employees } = useSelector(
    (state) => state.all.details.dashboard.details
  );
  const { loading } = useSelector((state) => state.all);
  const findUserById = (_id) => {
    return customers.filter((customer) => customer._id === _id)[0];
  };
  const findRoomById = (_id) => {
    return rooms.filter((room) => room._id === _id)[0];
  };

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="card dashboard p-4">
          <h4>Dashboard</h4>
          <hr />
          <div className="row ">
            <div className="col border mx-2 p-3 bg-info text-light rounded shadow">
              <h4>Rooms</h4>
              Total rooms : {rooms.length} <br />
              Available : {rooms.filter((room) => !room.isBooked).length}
            </div>
            <div className="col border mx-2 p-3 bg-success text-light rounded shadow">
              <h4>Orders</h4>
              Total orders : {orders.length} <br />
              Completed orders :{" "}
              {orders.filter((order) => order.completed).length}
            </div>
            <div className="col border mx-2 p-3 bg-warning text-light rounded shadow">
              <h4>Customers</h4>
              Total customers : {customers.length} <br />
              Happy : 0
            </div>
            <div className="col border mx-2 p-3 bg-light rounded shadow">
              <h4>Employees</h4>
              Total employees : {employees.length}
            </div>
          </div>
          <hr />
          <hr />
          <h4>Rooms</h4>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Room Number</th>
                <th scope="col">Capacity</th>
                <th scope="col">Price</th>
                <th scope="col">No. of beds</th>
                <th scope="col">Available </th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => {
                return (
                  <tr
                    key={room._id}
                    className={room.isBooked ? "table-danger" : "table-success"}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{room.roomNumber}</td>
                    <td>{room.capacity}</td>  
                    <td>${room.price}</td>
                    <td>{room.beds}</td>
                    <td>{room.isBooked ? "No" : "Yes"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <hr />
          <h4>Orders</h4>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer's name</th>
                <th scope="col">Room Number</th>
                <th scope="col">Date In</th>
                <th scope="col">Date Out</th>
                <th scope="col">No. of adults</th>
                <th scope="col">No. of children </th>
                <th scope="col">Checked Out </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr
                    key={order._id}
                    className={
                      order.completed ? "table-danger" : "table-success"
                    }
                  >
                    <th scope="row">{index + 1}</th>
                    <td>
                      {findUserById(order.orderBy).firstName}{" "}
                      {findUserById(order.orderBy).lastName}
                    </td>
                    <td className="text-center">
                      {findRoomById(order.roomBooked).roomNumber}
                    </td>
                    <td>{moment(order.dateIn).format("ll")}</td>
                    <td>{moment(order.dateOut).format("ll")}</td>
                    <td className="text-center">{order.numberOfAdults}</td>
                    <td className="text-center">{order.numberOfChildren}</td>
                    <td className="text-center">
                      {order.completed ? "Yes" : "No"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <hr />
          <h4>Customers</h4>
          <hr />
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="" scope="col">
                  #
                </th>
                <th className="" scope="col">
                  Customer's name
                </th>
                <th className="text-center" scope="col">
                  Phone
                </th>
                <th className="text-center" scope="col">
                  Address
                </th>
                <th className="text-center" scope="col">
                  Country
                </th>
                <th className="text-center" scope="col">
                  Company
                </th>
                <th className="text-center" scope="col">
                  ID Type{" "}
                </th>
                <th className="text-center" scope="col">
                  ID Number{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => {
                return (
                  <tr
                    key={customer._id}
                    // className={order.completed ? "table-danger" : "table-success"}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>
                      {customer.firstName} {customer.lastName}
                    </td>
                    <td className="text-center">{customer.phone}</td>
                    <td>{customer.address}</td>
                    <td>{customer.country}</td>
                    <td className="text-center">{customer.company}</td>
                    <td className="text-center">{customer.idType}</td>
                    <td className="text-center">{customer.idNumber}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <hr />
          <h4>Employees</h4>
          <hr />
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="" scope="col">
                  #
                </th>
                <th className="" scope="col">
                  Employee's name
                </th>
                <th className="text-center" scope="col">
                  Phone
                </th>
                <th className="text-center" scope="col">
                  Permanent Address
                </th>
                <th className="text-center" scope="col">
                  Current Address
                </th>
                <th className="text-center" scope="col">
                  Gender
                </th>
                <th className="text-center" scope="col">
                  DOB{" "}
                </th>
                <th className="text-center" scope="col">
                  ID Number{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => {
                return (
                  <tr
                    key={employees._id}
                    // className={order.completed ? "table-danger" : "table-success"}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{employee.name}</td>
                    <td className="text-center">{employee.phone}</td>
                    <td className="text-center">{employee.address_perm}</td>
                    <td className="text-center">{employee.address_curr}</td>
                    <td className="text-center">{employee.gender}</td>
                    <td className="text-center">
                      {moment(employee.dob).format("ll")}
                    </td>
                    <td className="text-center">{employee.idNumber}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
