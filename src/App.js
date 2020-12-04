import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Users from "./components/Users";
import Navigator from './components/Navigator'

function App() {
  return (
    <Router>
          <Navigator />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
