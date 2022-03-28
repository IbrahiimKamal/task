import { IoIosArrowDown } from 'react-icons/io';

import avatarImg from '../../assets/images/avatar.png';

import './Avatar.scss';

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={avatarImg} alt="avatar icon" className="avatar__image" />
      <span className="avatar__text">Angelina Joli</span>
      <span className="avatar__icon">
        <IoIosArrowDown />
      </span>
    </div>
  );
};

export default Avatar;
