import React from 'react';
import nextStage from '../lib/mapFunc/mapFuncNextStage';

const EntryPage = () => {
  return (
    <>
      <div>
        <h1>Game Entry Page</h1>
        <div>
          <button
            onClick={() => {
              nextStage('/tutoZeroOne');
            }}
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
};

export default EntryPage;
