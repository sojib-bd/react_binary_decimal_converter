import React from "react";
import "./input.css";

class Input extends React.Component {
  handleChange(e) {
    this.props.onChange(e);
  }
  render() {
    return (
      <div className="inputPortion">
        <input
          type="text"
          className="text-input"
          placeholder="Type out your Number..."
          onChange={e => this.handleChange(e)}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Input;
