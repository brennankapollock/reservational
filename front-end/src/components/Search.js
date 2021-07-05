import React, { useState } from "react";
import {listReservations} from "../utils/api";
import DisplayReservations from "./DisplayReservations";


function Search() {
  const [search, setSearch] = useState({mobile_number: ""});
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  const abortController = new AbortController();

  function submitHandler(event){
      event.preventDefault();
      listReservations(search, abortController.signal)
        .then(setReservations)
        .catch(setError)
    return () => abortController.abort();
  }

  function changeHandler({target}) {
      setSearch((prev) => ({
          ...prev,
          [target.name]: target.value,
      }));
  }
  
  
  
  return (
      <div>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={changeHandler} value={search.mobile_number} id="mobile_number" placeholder="Enter a customer's phone number" name="mobile_number"/>
            <button type="submit">Find</button>
        </form>
        <DisplayReservations reservations={reservations}/>
      </div>


  )
}

export default Search;