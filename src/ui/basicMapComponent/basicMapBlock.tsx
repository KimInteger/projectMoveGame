import React from 'react';
import '../../style/basicMap.css';
import { BasicMapBlockProps } from '../../interface/interfaceMap/basicMapBlockProps';

const BasicMapBlock: React.FC<BasicMapBlockProps> = ({ area, content }) => {
  return (
    <div className="basicMapBlock" style={{ gridArea: area }}>
      {content}
    </div>
  );
};

export default BasicMapBlock;
