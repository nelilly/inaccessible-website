import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { updateUrl } from 'src/shared/updateUrl';
import {
  tab,
  tabButtons,
  tabButton,
  platform,
  tabPanel,
  selected,
  card,
  cardTitle,
  cardDescription,
  cta,
} from './style.module.css';

const TabList = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(items[0].image);

  const tabs = items.map((item) => (
    <button
      className={`${tabButton} ${item.image === currentItem ? selected : ''}`}
      id={`tab${item.image}`}
      key={`tab${item.image}`}
      onClick={() => setCurrentItem(item.image)}
      type="button"
    >
      <img src={`${process.env.ASSET_PREFIX}${item.image}`} height="90" width="90" alt="" />
    </button>
  ));

  const panels = items.map((item) => (
    <article className={`${tabPanel} ${item.image === currentItem ? selected : ''}`} id={`panel${item.image}`} key={`panel${item.image}`}>
      <div className={card}>
        {item.title && <h3 className={cardTitle}>{item.title}</h3>}
        {item.byline && <p className={cardDescription}>by {item.byline}</p>}
        <img src={`${process.env.ASSET_PREFIX}/${item.image}`} alt={item.title} />
        {item.description && <p className={cardDescription}>{item.description}</p>}
        {item.cta && <p className="cardCta">{item.cta.lead}<Link href={updateUrl(item.cta.url)}><a href={updateUrl(item.cta.url)} className={cta}>{item.cta.label}</a></Link></p>}
      </div>
    </article>
  ));

  return (
    <article className={tab}>
      <section className={tabButtons}>
        {tabs}
      </section>
      <section className={platform}>
        {panels}
      </section>
    </article>
  );
};

export default TabList;

TabList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    byline: PropTypes.string,
  })).isRequired,
};
