import React, { useState } from "react";
import boxes from "./boxes";
import Box from "./Box";
import "./App.css";

export default function App() {
  const [boxItem, setBoxItem] = useState(boxes);

  function toggleState(id) {
    setBoxItem(prevBoxItem => {
      return prevBoxItem.map((item) => {
       return item.id === id ? {...item, on: !item.on} : item
      })
    
    })
  }

  const elements = boxItem.map((item) => (
    <Box key={item.id} on={item.on} statechange={toggleState} id={item.id}/>
  ));

  return <main>{elements}</main>;
}
