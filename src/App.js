import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import General from "./components/General";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <General />
        </Router>
      </>
    );
  }
}

export default App;
