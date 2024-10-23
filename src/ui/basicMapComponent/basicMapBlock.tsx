import React from 'react';
import '../../style/basicMap.css';
import { BasicMapBlockProps } from '../../interface/interfaceMap/basicMapBlockProps';
import { useTheme } from '../../state/themeContext';
import Player from '../player/playerComponent';

const BasicMapBlock: React.FC<BasicMapBlockProps> = ({
  area,
  playerArea,
  onReachTarget,
}) => {
  const { theme } = useTheme();

  return (
    <div className={`basicMapBlock ${theme}`} style={{ gridArea: area }}>
      {/* 플레이어가 해당 블록의 영역에 있을 경우 렌더링 */}
      {playerArea === area && (
        <Player initialArea={area} onReachTarget={onReachTarget} />
      )}
    </div>
  );
};

export default BasicMapBlock;
