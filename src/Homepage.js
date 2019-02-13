import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home history={this.props.history} />
      </React.Fragment>
    );
  }
}

export default App;
