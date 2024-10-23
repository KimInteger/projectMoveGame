import React from 'react';
import TutorialMap from '../ui/basicMapTemplate/tutorialTemplate';
import nextStage from '../lib/mapFunc/mapFuncNextStage';
import { gridAreas } from '../static/basicMapGridArea/staticBasicMapAreas';
import BasicMapTemplate from '../ui/basicMapTemplate/basicMap';

const TutorialZeroThree = () => {
  const area = gridAreas.third;

  return (
    <>
      <TutorialMap title="튜토리얼 3" routeFunc={nextStage('/')}>
        <p>
          안녕 여긴 튜토리얼 3이란다. 조선의 궁궐에 당도한 것을 환영하오
          나썬이여
        </p>
      </TutorialMap>
      <BasicMapTemplate areas={area} />
    </>
  );
};

export default TutorialZeroThree;
