import React from "react";
import "./display.css";
import Input from "./input";
import Button from "./Buttons";
import Output from "./output";

class Display extends React.Component {
  state = {
    text: "",
    display: false,
    value: ""
  };

  handleClick(e) {
    this.setState({
      text: e.target.value,
      display: false
    });
  }

  handleOverClick() {
    const newItem = this.state.text;
    this.setState({
      ...this.state,
      display: true,
      value: Number(newItem).toString(2)
    });
  }

  handleChange() {
    const decimal = this.state.text;

    this.setState({
      ...this.state,
      display: true,
      value:
        parseInt(decimal.toString(), 2) === 1
          ? "error"
          : parseInt(decimal.toString(), 2)
    });
  }

  render() {
    let output;

    if (this.state.display) {
      output = this.state.value;
    }
    return (
      <div className="display-monitor">
        <Input onChange={e => this.handleClick(e)} value={this.state.text} />
        <Button
          clickHandle={e => this.handleOverClick(e)}
          handleChange={() => this.handleChange()}
        />
        <Output value={output} />
      </div>
    );
  }
}

export default Display;
