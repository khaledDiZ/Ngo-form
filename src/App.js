import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";

class App extends Component {
  state = {
    forms: {}
  };

  addForm = form => {
    const forms = { ...this.state.forms };
    forms[`form${Date.now()}`] = form;
    this.setState({
      forms
    });
  };
  render() {
    return (
      <>
        <Navbar />
        <Form history={this.props.history} addForm={this.addForm} />
      </>
    );
  }
}

export default App;
