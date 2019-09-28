import React from "react";
import "./output.css";
class Output extends React.Component {
  render() {
    return (
      <div className="output">
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Output;
