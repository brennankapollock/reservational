import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { listReservations, listTables } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import {previous, next, today} from "../utils/date-time";
import DisplayReservations from "../components/DisplayReservations";
import DisplayTables from "../components/DisplayTables";


/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ defaultDate }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const [tables, setTables] = useState([]);

  let query = new URLSearchParams(useLocation().search);

  const queryDate = query.get("date");
  
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

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    listTables(abortController.signal)
      .then(setTables)
      .catch(setReservationsError)
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
        <div className="container">
          <div className="row">
          <div className="col-md-6">
            <DisplayReservations reservations = {reservations}/>
          </div>
          <div className="col-md-6">
            <DisplayTables tables = {tables}/>
          </div>
          </div>
        </div>
  
    
      
    
    </main>
  );
}

export default Dashboard;
