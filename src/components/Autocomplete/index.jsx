import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import {
  autocomplete,
  autocompleteList,
  autocompleteItem,
  autocompleteCard,
  autocompleteAction,
  hide,
  show,
  orrery,
  first,
  second,
  third,
} from './style.module.css';

const Autocomplete = ({
  terms,
}) => {
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const inputRef = useRef(null);
  const updateInput = (e) => {
    setSearchInput(e.target.value);
    setOpen(true);
  };

  return (
    <article className={autocomplete}>
      <form autoComplete="off" action="">
        <div>
          <input ref={inputRef} type="text" name="planet" value={searchInput} onChange={updateInput} onKeyUp={updateInput} placeholder="Planet Search" />
        </div>
      </form>
      {searchInput && (
        <ul className={`${autocompleteList} ${!searchInput.length || !open ? hide : show}`}>
          {
            searchInput && terms
              .filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
              .map((item) => <li key={item.name} className={autocompleteItem}><button type="button" className={autocompleteAction} onClick={(e) => { updateInput(e); setOpen(false); }} value={item.name}>{item.name}</button></li>)
          }
        </ul>
      )}
      <div className={autocompleteCard}>
        {!searchInput || searchInput.toLowerCase() !== terms
          .filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
          .map((item) => item.name)[0]?.toLowerCase()
          ? (
            <div>
              <h2 style={{ margin: 0 }}>Look for planets</h2>
              <svg className={orrery} height="100" width="100" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle className="sun" cx="16" cy="16" r="3" />
                <g className={third}>
                  <circle cx="16" cy="16" r="13" fill="none" stroke="#006" strokeMiterlimit="10" strokeWidth=".4" />
                  <circle cx="27" cy="23.1" r="1" />
                </g>
                <g className={second}>
                  <circle cx="16" cy="16" r="10" fill="none" stroke="#006" strokeMiterlimit="10" strokeWidth=".4" />
                  <circle cx="20.5" cy="7.2" r="1" />
                </g>
                <g className={first}>
                  <circle cx="16" cy="16" r="6" fill="none" stroke="#006" strokeMiterlimit="10" strokeWidth=".4" />
                  <circle cx="13" cy="21" r="1" />
                </g>
              </svg>
            </div>
          )
          : (
            <div>
              <p>You&rsquo;ve found a planet!</p>
              <h2>
                <a href={`https://en.wikipedia.org/wiki/${searchInput}`} target="_blank" rel="noopener noreferrer">
                  {searchInput && terms
                    .filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
                    .map((item) => item.name)[0]}
                </a>
              </h2>
            </div>
          )}
      </div>
    </article>
  );
};

export default Autocomplete;

Autocomplete.propTypes = {
  terms: PropTypes.arrayOf(PropTypes.object).isRequired,
};
