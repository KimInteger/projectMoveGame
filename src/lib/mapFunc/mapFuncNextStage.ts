import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const nextStage = (stage: string): void => {
  navigate(stage);
};

export default nextStage;
