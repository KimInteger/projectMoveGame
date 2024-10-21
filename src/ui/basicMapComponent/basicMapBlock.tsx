import React from 'react';
import '../../style/basicMap.css';
import { BasicMapBlockProps } from '../../interface/interfaceMap/basicMapBlockProps';
import { useTheme } from '../../state/themeContext'; // useTheme import

const BasicMapBlock: React.FC<BasicMapBlockProps> = ({ area, content }) => {
  const { theme } = useTheme(); // 현재 테마 가져오기

  return (
    <div
      className={`basicMapBlock ${theme}`} // 테마에 따라 클래스 추가
      style={{ gridArea: area }}
    >
      {content}
    </div>
  );
};

export default BasicMapBlock;
