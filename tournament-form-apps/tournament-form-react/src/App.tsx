import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Disciplines } from './pages/disciplines/Disciplines';
import { Tournaments } from './pages/tournaments/Tournaments';

function App() {
  return (
    <Routes>
      <Route path="/disciplines" element={<Disciplines />} />
      <Route path="/disciplines/:id/tournaments" element={<Tournaments />} />
      <Route path="*" element={<Navigate to="/disciplines" />} />
    </Routes>
  );
}

export default App;
