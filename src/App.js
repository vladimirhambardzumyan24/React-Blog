import React from "react";
import "./App.css";
import MenuAppBar from "./components/Navbar.jsx"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MenuAppBar />
    )
  }
}

export default App;
