import { GrFormAdd } from 'react-icons/gr';

import './Button.scss';

const Button = ({ title, isIcon, className }) => {
  return (
    <button className={`app-button ${className}`}>
      {isIcon && <GrFormAdd color="white" />}
      <span>{title}</span>
    </button>
  );
};

export default Button;
