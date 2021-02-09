import PropTypes from 'prop-types';

import {
  sectionImage,
} from './style.module.css';

const SectionImage = ({ image, transform = 'none', backgroundPosition = 'top center' }) => {
  const backgroundImage = `url(${process.env.ASSET_PREFIX}${image})`;
  return (
    <header className={sectionImage} style={{ backgroundImage, backgroundPosition, transform }} />
  );
};

export default SectionImage;

SectionImage.propTypes = {
  image: PropTypes.string.isRequired,
  backgroundPosition: PropTypes.string,
  transform: PropTypes.string,
};
