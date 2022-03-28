import { BsFileEarmarkFill } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Icon from '../Icon/Icon';

import './Card.scss';

const Card = () => {
  return (
    <div className="card">
      <div className="card__icon">
        <Icon>
          <BsFileEarmarkFill color="#2697FF" />
        </Icon>
        <BiDotsVerticalRounded color="#808D99" />
      </div>

      <p className="card__text">Documents</p>
      <div className="card__progress">
        <div className="card__progress--main"></div>
      </div>
      <div className="card__footer">
        <span>1,328 Files</span>
        <span className="card__footer--bold">1.3GB</span>
      </div>
    </div>
  );
};

export default Card;
