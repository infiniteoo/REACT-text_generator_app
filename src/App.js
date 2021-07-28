import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paras: 4,
      html: "html",
      text: "",
    };
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios
      .get(
        "https://baconipsum.com/api/?type=meat-and-filler&paras=" +
          this.state.paras +
          "&format=" +
          this.state.html
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ text: response.data }, function () {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <div className="App">Hello</div>;
  }
}

export default App;
