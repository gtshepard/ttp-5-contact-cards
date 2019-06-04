import React from 'react';
import Container from './container.js'
import Decrement from './decrement.js'
import './App.css';

function App() {
  return (
    <div>
      <Decrement count={0}></Decrement>

      <Container className="Container"></Container>
    </div>)
}

export default App;
