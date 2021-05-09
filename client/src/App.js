import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Bike from './pages/bike';
import Bikes from './pages/bikes';

export default function Pages() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Bikes />
          </Route>
          <Route path="/:id" component={Bike} />
        </Switch>
    </Router>
  );
}
