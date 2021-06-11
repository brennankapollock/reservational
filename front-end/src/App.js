import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import NewReservation from "./components/NewReservation";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */




function App() {
  return (
    <Switch>
      <Route path="/">
        <Layout />
        <Route path="/reservations/new">
          <NewReservation />
        </Route>
      </Route>
    </Switch>
  );
}

export default App;
