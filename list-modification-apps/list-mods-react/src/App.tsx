import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState(0);
  setState(state + 1);
  
  console.log(state);
  return (
    <h1>{state}</h1>
  );
}

export default App;
