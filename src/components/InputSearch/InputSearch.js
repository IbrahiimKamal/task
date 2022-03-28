import { BiSearch } from 'react-icons/bi';

import './InputSearch.scss';

const InputSearch = () => {
  return (
    <div className="input-search">
      <input type="text" className="input-search__input" placeholder="Search" />
      <span className="input-search__icon">
        <BiSearch />
      </span>
    </div>
  );
};

export default InputSearch;
