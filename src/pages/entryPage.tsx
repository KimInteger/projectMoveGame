import React from 'react';
import { useTheme } from '../state/themeContext'; // useTheme 불러오기
import nextStage from '../lib/mapFunc/mapFuncNextStage';

const EntryPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={theme}>
        <h1>Game Entry Page</h1>
        <button onClick={nextStage('/tutoZeroOne')}>Start</button>
        <button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'dark' : 'light'} Theme
        </button>
      </div>
    </>
  );
};

export default EntryPage;
