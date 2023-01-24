import React, { useState } from 'react';
import './App.css';
import Body from './Body';
import Header from './Header';

export default function App() {

  const [name, setName] = useState("John");


  return(
    <div>
      <h1>Test App</h1>
      <Header name={name} />
      <Body name={name} />
    </div>
  )
}