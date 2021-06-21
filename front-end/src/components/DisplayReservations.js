import React from "react";


//change each reservation to be it's own card

function DisplayReservations({reservations}) {


    const reservationCards = reservations.map((res) => (
        <div className="card col-md-3">
            <div className="card-body">
                <h5 className="card-title text-center">Reservation Info:</h5>
                <p className="card-text">{res.first_name} {res.last_name}</p>
                <p className="card-text">Mobile: {res.mobile_number}</p>
                <p className="card-text">Date: {res.reservation_date}</p>
                <p className="card-text">Time: {res.reservation_time}</p>
                <p className="card-text">Party Size: {res.people}</p>
                <button className="btn btn-primary">Seat</button>
            
            </div>
        
        </div>
    ))

    return (
        <div>
        {reservationCards}
        </div>
    )
}


export default DisplayReservations;