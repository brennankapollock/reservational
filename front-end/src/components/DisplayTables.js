import React from "react";
import {useHistory} from "react-router-dom";
import { finishTable } from "../utils/api";

function DisplayTables({tables}) {

    const history = useHistory();

    function occupied(tab){
        return tab.reservation_id === null;
    }

    function handleFinish({target}) {
        const confirmation = window.confirm("Is this table ready to seat new guests? This cannot be undone.");

        if(confirmation) {
            let tabId = target.id;

            const abortController = new AbortController();

            finishTable(tabId, abortController.signal)
                .then(() => {
                    history.push("/")
            })
        }
    }

    const tableCards = tables.map((tab) => (
        <div className="card" key={tab.table_id}>
            <div className="card-body">
                <h5 className="card-title text-center">Table Info:</h5>
                <h6 data-table-id-status={tab.table_id} className="card-title">
                    {occupied(tab) ? "Free" : 
                    <button 
                    data-table-id-finish={tab.table_id} 
                    value={tab.reservation_id} 
                    id={tab.table_id} 
                    onClick={handleFinish}>
                    Finish
                    </button>}
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