import { useNavigate } from 'react-router-dom';

const nextStage = (stage: string): (() => void) => {
  const navigate = useNavigate();

  return () => {
    navigate(stage);
  };
};

export default nextStage;
