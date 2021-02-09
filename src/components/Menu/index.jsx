import PropTypes from 'prop-types';

import {
  menu,
  menuItem,
  menuTitle,
  open as openStyle,
} from './style.module.css';

const Menu = ({ open }) => (
  <section id="navigation" className={`${menu} ${open === true ? openStyle : ''}`}>
    <h2><svg height="64" width="64" viewBox="0 0 100 100"><use href="#helm" /></svg> Navigation</h2>
    <ul>
      <li>
        <a href="information" className={`${menuItem} ${menuTitle}`}>Isolated</a>
        <ul>
          <li><a href="#philadelphia" className={menuItem}>Philadelphia</a></li>
          <li><a href="#area_51" className={menuItem}>Area 51</a></li>
          <li><a href="#mcmurdo_station" className={menuItem}>McMurdo Station</a></li>
        </ul>
      </li>
      <li>
        <a href="remote" className={`${menuItem} ${menuTitle}`}>Remote</a>
        <ul>
          <li><a href="#mount_everest" className={menuItem}>Mount Everest</a></li>
          <li><a href="#easter_island" className={menuItem}>Easter Island</a></li>
          <li><a href="#nan_madol" className={menuItem}>Nan Madol</a></li>
        </ul>
      </li>
      <li>
        <a href="nebulous" className={`${menuItem} ${menuTitle}`}>Distant</a>
        <ul>
          <li><a href="#clouds" className={menuItem}>The Clouds</a></li>
          <li><a href="#stratosphere" className={menuItem}>Stratosphere</a></li>
          <li><a href="#moon" className={menuItem}>The Moon</a></li>
        </ul>
      </li>
      <li>
        <a href="unreachable" className={`${menuItem} ${menuTitle}`}>Unreachable</a>
        <ul>
          <li><a href="saturn" className={menuItem}>Saturn</a></li>
          <li><a href="uranus" className={menuItem}>Uranus</a></li>
          <li><a href="pluto" className={menuItem}>Pluto</a></li>
        </ul>
      </li>
      <li>
        <a href="info" className={`${menuItem} ${menuTitle}`}>Site Info</a>
        <ul>
          <li><a href="/about/">About N.E.Lilly</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </li>
    </ul>

    <fieldset className="search">
      <legend className="search__legend">Search</legend>
      <input
        className="searchInput"
        type="text"
        name="search"
        placeholder="Enter Search Term"
      />
      <button className="search__button" type="submit">
        <svg viewBox="0 0 100 100" height="24" width="24" fill="none" stroke="#000" strokeWidth="6">
          <circle cx="50" cy="50" r="25" /><path d="M67,67 99,99" />
        </svg>
      </button>
    </fieldset>
  </section>
);

export default Menu;

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
};
