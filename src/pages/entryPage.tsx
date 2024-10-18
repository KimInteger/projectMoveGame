import React from 'react';
import nextStage from '../lib/mapFunc/mapFuncNextStage';

const EntryPage = () => {
  const nextRoute = nextStage('/tutoZeroOne');
  return (
    <>
      <div>
        <h1>Game Entry Page</h1>
        <div>
          <button onClick={nextRoute}>Start</button>
        </div>
      </div>
    </>
  );
};

export default EntryPage;
