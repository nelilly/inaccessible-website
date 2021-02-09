import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  carousel,
  carouselItem,
  carouselImage,
  carouselText,
  carouselCaption,
  byline,
  prev,
  next,
} from './style.module.css';

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const showSlide = (n) => {
    if (images.length < 1) { return; }
    if (n > images.length) { setCurrent(0); }
  };
  const nextSlide = () => {
    if (current >= images.length - 1) { setCurrent(0); } else {
      setCurrent(current + 1);
    }
    showSlide(current);
  };
  const prevSlide = () => {
    if (current <= 0) { setCurrent(images.length - 1); } else {
      setCurrent(current - 1);
    }
    showSlide(current);
  };

  const listItems = images.map((item, i) => (
    <figure className={carouselItem} key={`${item.title}${item.artist}`} style={i === current ? { display: 'block' } : { display: 'none' }}>
      <p className={carouselText}>{i + 1} / {images.length}</p>
      <div className={carouselImage}>
        <img src={`${process.env.ASSET_PREFIX}${item.image}`} />
      </div>
      <figcaption className={carouselCaption}>&#9755; <em>{item.title}</em> <span className={byline}>by <a href={item.source} target="_blank" rel="noopener noreferrer">{item.artist}</a></span></figcaption>
    </figure>
  ));

  return (
    <div className={carousel}>
      {listItems}
      <a className={prev} onClick={prevSlide}>&#10094;</a>
      <a className={next} onClick={nextSlide}>&#10095;</a>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  images: PropTypes.arrayOf(String),
};
