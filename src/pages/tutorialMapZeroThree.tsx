import React from 'react';
import TutorialMap from '../ui/basicMapTemplate/tutorialTemplate';
import nextStage from '../lib/mapFunc/mapFuncNextStage';

const TutorialZeroThree = () => {
  const nextRoute = nextStage('/');

  return (
    <>
      <TutorialMap title="튜토리얼 3" routeFunc={nextRoute}>
        <p>
          안녕 여긴 튜토리얼 3이란다. 조선의 궁궐에 당도한 것을 환영하오
          나썬이여
        </p>
      </TutorialMap>
    </>
  );
};

export default TutorialZeroThree;
