import Avatar from '../Avatar/Avatar';
import InputSearch from '../InputSearch/InputSearch';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="navbar__text">Documents</h3>
      <div className="navbar__list">
        <InputSearch />
        <Avatar />
      </div>
    </nav>
  );
};

export default Navbar;
