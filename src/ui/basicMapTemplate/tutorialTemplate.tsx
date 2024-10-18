import React from 'react';
import TutorialMapProps from '../../interface/interfaceMap/tutorialInterface';

const TutorialMap: React.FC<TutorialMapProps> = ({
  title,
  routeFunc,
  children,
}) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <div>{children}</div>
        <div>
          <button onClick={routeFunc}>NextStage</button>
        </div>
      </div>
    </>
  );
};

export default TutorialMap;
