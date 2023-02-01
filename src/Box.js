import React from "react";

export default function Box(props) {
  const boxStyle = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return (
    <div className="box" onClick={() =>props.statechange(props.id)} style={boxStyle}></div>
  );
}
