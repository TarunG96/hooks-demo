import './App.css';
import React from 'react';
import Counter from './Counter'
import NewUser from './NewUser'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Link to="/new-user">Create User</Link>
        <Switch>
          <Route path="/new-user">
            <NewUser />
          </Route>
          <Route path="/">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
