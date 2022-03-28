import { BsFileEarmarkFill } from 'react-icons/bs';

import './Icon.scss';

const Icon = ({ children, backgroundColor }) => {
  return (
    <div className="icon">
      <span style={{ backgroundColor }} className="icon__file">
        {children}
      </span>
    </div>
  );
};

export default Icon;
