import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paras: 4,
      html: true,
      text: "",
    };
  }

  render() {
    return <div className="App">Hello</div>;
  }
}

export default App;
