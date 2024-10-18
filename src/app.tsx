import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EntryPage from './pages/entryPage';
import TutorialZeroOne from './pages/tutorialMapZeroOne';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/tutoZeroOne" element={<TutorialZeroOne />} />
        <Route path="/tutoZeroTwo" />
        <Route path="/tutoZeroThree" />
      </Routes>
    </Router>
  );
};

export default App;
