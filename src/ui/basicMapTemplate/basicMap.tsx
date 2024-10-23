import React from 'react';
import { BasicMapInterface } from '../../interface/interfaceMap/basicMapInterface';
import '../../style/basicMap.css';
import BasicMapBlock from '../basicMapComponent/basicMapBlock';
import { gridAreas } from '../../static/basicMapGridArea/staticBasicMapAreas';

const BasicMapTemplate: React.FC<BasicMapInterface> = ({ areas, player }) => {
  const handleReachTarget = () => {
    console.log('Target reached! Navigating to next page...');
    // 여기에 라우팅 로직 추가
  };

  return (
    <div className="basicMap">
      {areas.map((area, index) => (
        <BasicMapBlock
          key={index}
          area={area}
          playerArea={player} // 현재 플레이어의 영역 전달
          onReachTarget={handleReachTarget}
        />
      ))}
    </div>
  );
};

export default BasicMapTemplate;
