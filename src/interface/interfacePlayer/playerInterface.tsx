export interface PlayerProps {
  initialArea: string; // 초기 영역 이름
  onReachTarget: () => void; // 목표 도달 시 호출되는 함수
}
