import { RiYoutubeFill } from 'react-icons/ri';

import './MediaFile.scss';

const MediaFile = () => {
  return (
    <div className="media-file">
      <div className="media-file__info">
        <span className="media-file__icon">
          <RiYoutubeFill color="#26E5FF" size={30} />
        </span>
        <div className="media-file__content">
          <p>Document Files</p>
          <span>1,328 Files</span>
        </div>
      </div>
      <div className="media-file__size">1.3GB</div>
    </div>
  );
};

export default MediaFile;
