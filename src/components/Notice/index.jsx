import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import {
  notice,
  noticeButton,
  noticeInfo,
  noticeSuccess,
  noticeWarning,
  noticeError,
  open as openStyle,
} from './style.module.css';

const Notice = ({ message, level }) => {
  const [open, setOpen] = useState('closed');
  const navOpenRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('noticeOpen') !== 'closed') {
      setTimeout(() => setOpen('open'), 2000);
    }
  }, []);

  let levelStyle = '';
  switch (level) {
    case 'info':
      levelStyle = noticeInfo;
      break;
    case 'success':
      levelStyle = noticeSuccess;
      break;
    case 'warning':
      levelStyle = noticeWarning;
      break;
    case 'error':
      levelStyle = noticeError;
      break;
    default:
      levelStyle = '';
  }

  const handleClose = () => {
    setOpen(!open);
    localStorage.setItem('noticeOpen', 'closed');
  };

  return (
    <div className={`${notice} ${levelStyle} ${open === 'open' ? openStyle : ''}`} ref={navOpenRef}>
      <p dangerouslySetInnerHTML={{ __html: message }} />
      <span className={noticeButton} onClick={handleClose}>×</span>
    </div>
  );
};

export default Notice;

Notice.propTypes = {
  message: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};
