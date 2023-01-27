import React, { useState } from 'react'


export default function Box(props) {

const [on, setOn] = useState(props.on);

function handleClick() {
    setOn(prevOn => !prevOn)
}


    const boxStyle = {
    backgroundColor: on ? "#222222" : "transparent"
}

 return(
    <div className= "box" style={boxStyle} onClick={handleClick} >{props.item}</div>
)
};
