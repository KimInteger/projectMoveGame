import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './state/themeContext'; // ThemeProvider 불러오기
import EntryPage from './pages/entryPage';
import TutorialZeroOne from './pages/tutorialMapZeroOne';
import TutorialZeroTwo from './pages/tutorialMapZeroTwo';
import TutorialZeroThree from './pages/tutorialMapZeroThree';
import NotFoundPage from './pages/notFound';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/tutoZeroOne" element={<TutorialZeroOne />} />
          <Route path="/tutoZeroTwo" element={<TutorialZeroTwo />} />
          <Route path="/tutoZeroThree" element={<TutorialZeroThree />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
