import React from "react";
import "./Buttons.css";

class Button extends React.Component {
  handleClick() {
    this.props.clickHandle();
  }

  render() {
    return (
      <div className="btns">
        <button className="binary" onClick={() => this.handleClick()}>
          To Binary
        </button>
        <span>
          <button onClick={() => this.props.handleChange()} className="decimal">
            To Decimal
          </button>
        </span>
      </div>
    );
  }
}

export default Button;
