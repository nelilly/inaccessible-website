import PropTypes from 'prop-types';

import {
  textCarousel,
  textCarouselStage,
  textCarouselItem,
  slide,
} from './style.module.css';

const TextCarousel = ({ words }) => {
  const wordList = words.map((item) => (
    <dd className={textCarouselItem} key={item}>{item}</dd>
  ));

  return (
    <article className={textCarousel}>
      <h3>In other words...</h3>
      <div className={textCarouselStage}>
        <dl className={slide}>
          {wordList}
        </dl>
      </div>
    </article>
  );
};

export default TextCarousel;

TextCarousel.propTypes = {
  words: PropTypes.array.isRequired,
};
