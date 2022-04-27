import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Disciplines } from './pages/disciplines/Disciplines';

function App() {
  return (
    <Routes>
      <Route path="/disciplines" element={<Disciplines />} />
    </Routes>
  );
}

export default App;
