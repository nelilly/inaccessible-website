import PropTypes from 'prop-types';

import {
  mainHeader,
  hero,
  heroStage,
  heroBlurb,
} from './style.module.css';

const Hero = ({
  title,
  tagline,
  color = '#000',
  description,
  image,
}) => (
  <>
    <header className={mainHeader}>
      <style>{`
        .${hero}::after {
          background-color: ${color};
          background-image: url(${process.env.ASSET_PREFIX}/${image});
        }
      `}
      </style>
      <article className={`${hero}`}>
        <section className={heroStage}>
          <h1>{ title }</h1>
          <div className={heroBlurb}>
            <h3>{ tagline }</h3>
            <p>{ description }</p>
          </div>
        </section>
      </article>
    </header>
  </>
);

export default Hero;

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
