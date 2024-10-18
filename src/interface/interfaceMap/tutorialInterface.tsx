import { ReactNode } from 'react';

interface TutorialMapProps {
  title: string;
  routeFunc: () => void;
  children: ReactNode;
}

export default TutorialMapProps;
