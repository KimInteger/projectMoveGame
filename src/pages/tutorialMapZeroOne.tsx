import React from 'react';
import TutorialMap from '../ui/basicMapTemplate/tutorialTemplate';
import nextStage from '../lib/mapFunc/mapFuncNextStage';
import BasicMapTemplate from '../ui/basicMapTemplate/basicMap';
import { gridAreas } from '../static/basicMapGridArea/staticBasicMapAreas';

const TutorialZeroOne = () => {
  const area = gridAreas.first;
  return (
    <>
      <TutorialMap title="튜토리얼 1" routeFunc={nextStage('/tutoZeroTwo')}>
        <p>
          안녕 여긴 튜토리얼 1이란다. 조선의 궁궐에 당도한 것을 환영하오
          나썬이여
        </p>
      </TutorialMap>
      <BasicMapTemplate areas={area} />
    </>
  );
};

export default TutorialZeroOne;
