import React from 'react';
import { BasicMapInterface } from '../../interface/interfaceMap/basicMapInterface';
import '../../style/basicMap.css';
import BasicMapBlock from '../basicMapComponent/basicMapBlock';

const BasicMapTemplate: React.FC<BasicMapInterface> = ({ areas }) => {
  return (
    <div className="basicMap">
      {areas.map((area, index) => (
        <BasicMapBlock key={index} area={area} content={`Block ${index + 1}`} />
      ))}
    </div>
  );
};

export default BasicMapTemplate;
