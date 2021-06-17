import React from "react";




function DisplayReservations({reservations}) {

    const rows = reservations.map((reservation, index) => (
        <tr key={index}>
            <td>{reservation.reservation_id}</td>
            <td>{reservation.first_name}</td>
            <td>{reservation.last_name}</td>
            <td>{reservation.mobile_number}</td>
            <td>{reservation.reservation_date}</td>
            <td>{reservation.reservation_time}</td>
            <td>{reservation.people}</td>
        </tr>
    ))


    return (
        <div>
         <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Number</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Party Size</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
         </table>
        
        
        </div>
    )
}


export default DisplayReservations;