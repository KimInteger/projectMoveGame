// interface directory를 만들어서 관리할 것.
interface ShareButtonProps {
  type: 'submit' | 'button' | 'reset';
  text: 'string';
}

const ShareButton: React.FC<ShareButtonProps> = ({ type, text }) => {
  return <button type={type}>{text}</button>;
};
