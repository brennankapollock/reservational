import React from "react";

function DisplayTables({tables}) {

    function occupied(tab){
        return tab.reservation_id === null;
    }

    const tableCards = tables.map((tab) => (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">Table Info:</h5>
                <h6 data-table-id-status={tab.table_id} className="card-title">
                    {occupied(tab) ? "Free" : "Occupied"}
                </h6>
                <p className="card-text">Table ID: {tab.table_id}</p>
                <p className="card-text">Name: {tab.table_name}</p>
                <p className="card-text">Capacity: {tab.capacity}</p>
                <p className="card-text">Res ID: {tab.reservation_id}</p>
            </div>
        </div>
    ))

    return (
        <div>
            {tableCards}
        </div>
    )


}


export default DisplayTables;