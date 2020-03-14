import React from 'react';
import './App.css';
import AllData from './containers/AllData';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import GetDateContainer from './containers/GetDateContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/data/date">
            <GetDateContainer />
          </Route>
          <Route path="/data">
            <AllData />
          </Route>
          <Route path='/' >
            <h1>Options</h1>
            <ul>
              <li>
                <Link to="/data">Show all available WHO data</Link>
              </li>
              <li>
                <Link to="/data/date">Show data for a particular date</Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
