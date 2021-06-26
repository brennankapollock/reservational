import React, { useEffect, useState } from "react";
import {
  readReservation,
  listTables,
  setReservationToTable,
  updateStatus,
} from "../utils/api";
import { useParams, useHistory } from "react-router-dom";

function AssignSeats() {
  const params = useParams();
  const history = useHistory();
  const reservation_id = params.reservation_id;

  const [reservation, setReservation] = useState([]);
  const [tables, setTables] = useState([]);

  const initialState = { table_id: "x" };
  const [formData, setFormData] = useState({ ...initialState });

  useEffect(() => {
    const abortController = new AbortController();

    async function loadData() {
      try {
        const resResult = await readReservation(
          reservation_id,
          abortController.signal
        );
        const tabResult = await listTables(abortController.signal);
        setReservation(resResult);
        setTables(tabResult);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    };
    loadData();
  }, [reservation_id]);


  const changeHandler = ({target}) =>{
    let value = target.value;
    setFormData({...formData, [target.name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(formData.table_id !== "x") {
      const abortController = new AbortController();
      let status = "seated";
      updateStatus(status, reservation_id, abortController.signal);
      setReservationToTable(formData.table_id, reservation.reservation_id, abortController.signal)
          .then(() => {
            history.push("/dashboard")
          })
      }
  }

  let free = tables.filter((table) => table.reservation_id === null && table.capacity >= reservation.people);

  return (
    <main>
    <div className="card-header">
              <h4>{reservation.first_name} {reservation.last_name}</h4>
            <div className="card-body">
              <h5 className="card-title">Time: {reservation.reservation_time}</h5>
              <p className="card-text">
                date: {reservation.reservation_date} <br />
                Mobile Number: {reservation.mobile_number}
                Party Size: {reservation.people} <br /> <br />
              </p>
            
            </div>
    </div>
    
    <div className="card-body">
              <form onSubmit={handleSubmit}>
                <select
                  name="table_id"
                  onChange={changeHandler}
                  className="form-control form-control-lg"
                  value={formData.table_id}
                >
                  <option value="x">--- Select A Table ---</option>
                  {free.map((table) => (
                    <option value={table.table_id}>
                      {table.table_name} - {table.capacity}
                    </option>
                  ))}
                </select>
                <button type="button" onClick={() => history.goBack()} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </form>
            </div>
  </main>


  )






}

export default AssignSeats;
