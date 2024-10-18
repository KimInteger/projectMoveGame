import React from 'react';
import TutorialMap from '../ui/basicMapTemplate/tutorialTemplate';
import nextStage from '../lib/mapFunc/mapFuncNextStage';

const TutorialZeroOne = () => {
  return (
    <>
      <TutorialMap title="튜토리얼 1" routeFunc={nextStage('/')}>
        <p>
          안녕 여긴 튜토리얼 1이란다. 조선의 궁궐에 당도한 것을 환영하오
          나썬이여
        </p>
      </TutorialMap>
    </>
  );
};

export default TutorialZeroOne;
