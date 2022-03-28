import { MdOutlineDashboard } from 'react-icons/md';
import { HiOutlineLogout } from 'react-icons/hi';

import logo from '../../assets/images/logo.jpg';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo-container">
        <img src={logo} alt="logo" className="sidebar__logo" />
      </div>
      <ul className="sidebar__links">
        <li className="sidebar__link">
          <MdOutlineDashboard />
          <span>Dashboard</span>
        </li>
        <li className="sidebar__link">
          <MdOutlineDashboard />
          <span>Dashboard</span>
        </li>
        <li className="sidebar__link">
          <MdOutlineDashboard />
          <span>Dashboard</span>
        </li>
        <li className="sidebar__link sidebar__link--active">
          <MdOutlineDashboard />
          <span>Dashboard</span>
        </li>
        <li className="sidebar__link">
          <MdOutlineDashboard />
          <span>Dashboard</span>
        </li>
        <li className="sidebar__link">
          <MdOutlineDashboard />
          <span>Dashboard</span>
        </li>
        <li className="sidebar__link">
          <MdOutlineDashboard />
          <span>Dashboard</span>
        </li>
        <li className="sidebar__link">
          <MdOutlineDashboard />
          <span>Dashboard</span>
        </li>
      </ul>
      <div className="sidebar__footer">
        <span>
          <HiOutlineLogout />
        </span>
        <span className="sidebar__footer--text">Log Out</span>
      </div>
    </div>
  );
};

export default Sidebar;
