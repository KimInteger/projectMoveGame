// interface directory를 만들어서 관리할 것.
interface ShareButtonProps {
  type: 'submit' | 'button' | 'reset';
  text: 'string';
  func: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ type, text, func }) => {
  return (
    <button onClick={func} type={type}>
      {text}
    </button>
  );
};
