import React, { useState } from 'react';
import boxes from './boxes';
import './App.css';



export default function App() {

const [boxItem, setBoxItem] = useState(boxes);
  

const elements = boxItem.map(item => (
  <div className= "box" key={item.id}></div>
))


return(
  <main>
    {elements}
  </main>
)
}
