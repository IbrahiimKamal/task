import { IoMdArrowDropdown } from 'react-icons/io';
import { IoLogoFigma } from 'react-icons/io5';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import './Order.scss';

const Order = () => {
  return (
    <div className="order">
      <div className="order__header">
        <p className="order__text">Recent Order</p>
        <Button title="See more" className="order__btn" />
      </div>
      <div className="order__icons">
        <p className="order__icon">
          <p className="order__icon--text">File Name</p>
          <IoMdArrowDropdown />
        </p>

        <p className="order__icon">
          <p className="order__icon--text">Date</p>
          <IoMdArrowDropdown />
        </p>

        <p className="order__icon">
          <p className="order__icon--text">Size</p>
          <IoMdArrowDropdown />
        </p>
      </div>
      <div className="order__items">
        <div className="order__item">
          <span className="order__item-icon">
            {' '}
            <Icon backgroundColor="#FF4387">
              <IoLogoFigma color="#fff" />
            </Icon>{' '}
            <span className="order__item-icon--text">Figma File</span>
          </span>
          <span className="order__item-date">01-03-2021</span>
          <span className="order__size">3.5mb</span>
        </div>

        <div className="order__item">
          <span className="order__item-icon">
            {' '}
            <Icon backgroundColor="#FF4387">
              <IoLogoFigma color="#fff" />
            </Icon>{' '}
            <span className="order__item-icon--text">Figma File</span>
          </span>
          <span className="order__item-date">01-03-2021</span>
          <span className="order__size">3.5mb</span>
        </div>
        <div className="order__item">
          <span className="order__item-icon">
            {' '}
            <Icon backgroundColor="#FF4387">
              <IoLogoFigma color="#fff" />
            </Icon>{' '}
            <span className="order__item-icon--text">Figma File</span>
          </span>
          <span className="order__item-date">01-03-2021</span>
          <span className="order__size">3.5mb</span>
        </div>
        <div className="order__item">
          <span className="order__item-icon">
            {' '}
            <Icon backgroundColor="#FF4387">
              <IoLogoFigma color="#fff" />
            </Icon>{' '}
            <span className="order__item-icon--text">Figma File</span>
          </span>
          <span className="order__item-date">01-03-2021</span>
          <span className="order__size">3.5mb</span>
        </div>
        <div className="order__item">
          <span className="order__item-icon">
            {' '}
            <Icon backgroundColor="#FF4387">
              <IoLogoFigma color="#fff" />
            </Icon>{' '}
            <span className="order__item-icon--text">Figma File</span>
          </span>
          <span className="order__item-date">01-03-2021</span>
          <span className="order__size">3.5mb</span>
        </div>
        <div className="order__item">
          <span className="order__item-icon">
            {' '}
            <Icon backgroundColor="#FF4387">
              <IoLogoFigma color="#fff" />
            </Icon>{' '}
            <span className="order__item-icon--text">Figma File</span>
          </span>
          <span className="order__item-date">01-03-2021</span>
          <span className="order__size">3.5mb</span>
        </div>
        <div className="order__item">
          <span className="order__item-icon">
            {' '}
            <Icon backgroundColor="#FF4387">
              <IoLogoFigma color="#fff" />
            </Icon>{' '}
            <span className="order__item-icon--text">Figma File</span>
          </span>
          <span className="order__item-date">01-03-2021</span>
          <span className="order__size">3.5mb</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
