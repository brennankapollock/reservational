import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import { createReservation } from "../utils/api";

function NewReservation() {
  const history = useHistory();


  const initialFormState = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: "",
    }
  const [reservation, setReservation] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setReservation({ [target.name]: target.value })
    console.log(reservation);
  };

const handleSubmit = (event) => {
  event.preventDefault();
  createReservation(reservation)
    .then(() => {
      history.push("/")
    })
} 

  return (
    <div>
      <h1 className="text-center">Create New Reservation</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              onChange={handleChange}
              value={reservation.first_name}
              required={true}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              onChange={handleChange}
              value={reservation.last_name}
              required={true}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="mobile_number">Phone Number:</label>
            <input
              type="text"
              className="form-control"
              id="mobile_number"
              name="mobile_number"
              onChange={handleChange}
              value={reservation.mobile_number}
              required={true}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="reservation_date">Reservation Date:</label>
            <input
              type="date"
              className="form-control"
              id="reservation_date"
              name="reservation_date"
              onChange={handleChange}
              value={reservation.reservation_date}
              required={true}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="reservation_time">Reservation Time:</label>
            <input
              type="time"
              className="form-control"
              id="reservation_time"
              name="reservation_time"
              onChange={handleChange}
              value={reservation.reservation_time}
              required={true}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="people">Group Size:</label>
            <input
              type="number"
              className="form-control"
              id="people"
              name="people"
              onChange={handleChange}
              value={reservation.people}
              required={true}
            />
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewReservation;
