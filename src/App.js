import React, { useState } from 'react';
import boxes from './boxes';
import Box from './Box';
import './App.css';



export default function App() {

const [boxItem, setBoxItem] = useState(boxes);



const elements = boxItem.map(item => (
  <Box key={item.id} on={item.on} />
))


return(
  <main>
    {elements}
  </main>
)
}
