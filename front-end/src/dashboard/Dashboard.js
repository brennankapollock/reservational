import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { listReservations } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import {previous, next, today} from "../utils/date-time";
<<<<<<< HEAD
import {useLocation} from "react-router-dom";
=======
>>>>>>> userone
import DisplayReservations from "../components/DisplayReservations";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ defaultDate }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);

  let query = new URLSearchParams(useLocation().search);

  const queryDate = query.get("date");
<<<<<<< HEAD
  
  let [date, setDate] = useState(queryDate ? queryDate : defaultDate)

  const buttons = (
    <div className="row p-3 justify-content-around">
      <button onClick={()=> setDate(previous(date))} name="previous" className="btn btn-outline-secondary btn-lg">Previous Day</button>
      <button 
        onClick={()=> setDate(today())} 
        name="today" 
        className={defaultDate===date ? "btn btn-success btn-lg" : "btn btn-outline-success btn-lg"}>Today</button>
      <button onClick={() => setDate(next(date))} name="next" className="btn btn-outline-secondary btn-lg">Next Day</button>
    </div>
  )

=======

  const [date, setDate] = useState(queryDate ? queryDate : defaultDate)

  const buttons = (
    <div className="text-center">
      <button onClick={() => setDate(previous(date))} name="previous" className="btn btn-primary">Previous</button>
      <button onClick={() => setDate(today(date))} name="today" className="btn btn-primary">Today</button>
      <button onClick={() => setDate(next(date))} name="next" className="btn btn-primary">Next</button>
    </div>
  )



>>>>>>> userone
  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Reservations for date: {date} </h4>
      </div>
      <ErrorAlert error={reservationsError} />
      {buttons}
      <DisplayReservations reservations = {reservations}/>
      {buttons}
    </main>
  );
}

export default Dashboard;
