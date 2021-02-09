import PropTypes from 'prop-types';

import {
  popup,
  label as labelStyle,
  flyout,
} from './style.module.css';

const Popup = ({
  label,
  children,
}) => (
  <>
    <span className={popup}>
      <span className={labelStyle}>{ label }</span>
      <span className={flyout}>{children}</span>
    </span>
  </>
);

export default Popup;

Popup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
