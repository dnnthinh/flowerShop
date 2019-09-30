import React from "react";
import ReactDOM from "react-dom";
import { Button, Checkbox } from "@material-ui/core";

class App extends React.Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>{" "}
        <br />
        <br />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </form>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
