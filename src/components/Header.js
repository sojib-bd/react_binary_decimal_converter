import React from "react";

const myStyle = {
  marginTop: "-10px",
  color: "white",
  position: "absolute",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  textTransform: "uppercase"
};

function Header() {
  return <h1 style={myStyle}>Binary or Decimal Converter</h1>;
}

export default Header;
