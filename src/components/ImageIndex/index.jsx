import PropTypes from 'prop-types';

import {
  imageIndex,
  imageIndexItem,
  imageIndexImage,
  imageIndexCaption,
  byline,
} from './style.module.css';

const ImageIndex = ({ images }) => {
  const listItems = images.map((item) => (
    <figure className={imageIndexItem} key={`${item.title}${item.artist}`}>
      <div className={imageIndexImage}>
        <img src={item.image} />
      </div>
      <figcaption className={imageIndexCaption}>&#9755; <em>{item.title}</em> <span className={byline}>by <a href={item.source} target="_blank" rel="noopener noreferrer">{item.artist}</a></span></figcaption>
    </figure>
  ));

  return (
    <div className={imageIndex}>
      {listItems}
    </div>
  );
};

export default ImageIndex;

ImageIndex.propTypes = {
  images: PropTypes.arrayOf(String),
};
