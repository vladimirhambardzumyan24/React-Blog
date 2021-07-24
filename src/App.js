import React from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import User from "./components/User";
import Blocks from "./components/Blocks";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Home />
        <Switch>
          <Route path="/blocks">
            <Blocks />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/users">
            <User />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
