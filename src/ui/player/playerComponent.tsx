import React, { useEffect, useState } from 'react';
import { PlayerProps } from '../../interface/interfacePlayer/playerInterface';
import { GridMap } from '../../interface/interfacePlayer/gridMapType';
import { Direction } from '../../interface/interfacePlayer/directionType';
import '../../style/basicMap.css';

const Player: React.FC<PlayerProps> = ({ initialArea, onReachTarget }) => {
  const [currentArea, setCurrentArea] = useState<string | null>(initialArea); // currentArea의 타입을 string | null로 수정

  // gridMap을 정의합니다.
  const gridMap: GridMap = {
    a: { up: null, down: 'd', left: null, right: 'b' },
    b: { up: null, down: 'e', left: 'a', right: 'c' },
    c: { up: null, down: 'f', left: 'b', right: null },
    d: { up: 'a', down: 'g', left: null, right: 'e' },
    e: { up: 'b', down: 'h', left: 'd', right: 'f' },
    f: { up: 'c', down: 'i', left: 'e', right: null },
    g: { up: 'd', down: 'j', left: null, right: 'h' },
    h: { up: 'e', down: 'k', left: 'g', right: 'i' },
    i: { up: 'f', down: 'l', left: 'h', right: null },
    j: { up: 'g', down: null, left: null, right: 'k' },
    k: { up: 'h', down: null, left: 'j', right: 'l' },
    l: { up: 'i', down: null, left: 'k', right: null },
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(`Pressed: ${event.key}`); // 키가 눌렸는지 로그 확인
      console.log(currentArea);

      if (currentArea === null) return;

      let newArea: string | null = null;

      switch (event.key) {
        case 'ArrowUp':
          newArea = getNewArea(currentArea, 'up');
          break;
        case 'ArrowDown':
          newArea = getNewArea(currentArea, 'down');
          break;
        case 'ArrowLeft':
          newArea = getNewArea(currentArea, 'left');
          break;
        case 'ArrowRight':
          newArea = getNewArea(currentArea, 'right');
          break;
        default:
          return; // 키가 해당하지 않으면 종료
      }

      // newArea가 null이 아닐 경우 currentArea를 업데이트
      if (newArea) {
        setCurrentArea((prevArea) => newArea); // 이전 상태에 기반하여 업데이트
      }

      // 목표 지점 도달 체크
      if (newArea === 'e') {
        onReachTarget();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentArea, onReachTarget]);

  // 주어진 방향에 따라 새로운 영역을 결정하는 함수
  const getNewArea = (
    currentArea: string,
    direction: Direction,
  ): string | null => {
    return gridMap[currentArea][direction];
  };

  return (
    <div
      className="player"
      style={{
        gridArea: currentArea ?? 'a', // currentArea가 null일 경우 기본값으로 'a'를 사용
      }}
    >
      Player
    </div>
  );
};

export default Player;
