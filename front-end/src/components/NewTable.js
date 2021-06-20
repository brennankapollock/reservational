import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import { createTable } from "../utils/api";




function NewTable() {

    const history = useHistory();
    const abortController = new AbortController();

    const initialState = {
        table_name: "",
        capacity: "",
    }

    const [table, setTable] = useState({...initialState});

    const handleChange = ({ target }) => {
        setTable({ ...table, [target.name]: target.value })
        console.log(table);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    async function updateData() {
        try {
        await createTable(table, abortController.signal)
        history.push("/dashboard");
        }
        catch (error) {
        if(error.name === "AbortError") {
            console.log("Aborted")
        } else {
            throw error;
        }
        }
    }
  updateData();
  return () => abortController.abort();
} 


    return (
        <div>
            <h1 className="text-center">Create New Table</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="table_name">Table Name:</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="table_name"
                                name="table_name"
                                onChange={handleChange}
                                value={table.table_name}
                                required={true}
                            />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="capacity">Capacity:</label>
                            <input 
                                type="number"
                                className="form-control"
                                id="capacity"
                                name="capacity"
                                onChange={handleChange}
                                value={table.capacity}
                                required={true}
                            />
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-danger" onClick={() => history.goBack()}>Cancel</button>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}



export default NewTable;