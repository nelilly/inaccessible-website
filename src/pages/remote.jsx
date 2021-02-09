import Head from 'next/head';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import SectionImage from 'src/components/SectionImage';
import TextCarousel from 'src/components/TextCarousel';
import ImageIndex from 'src/components/ImageIndex';
import TabList from 'src/components/TabList';
import DataTable from 'src/components/DataTable';
import {
  title,
  tagline,
  description,
  climberList,
  trashArtGallery,
  textCarousel,
  pageImages,
} from 'src/data/remote.json';

const Remote = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </Head>
    <Layout>
      <Hero title="Remote Art" tagline={tagline} description={description} image="/images/header/sebastian-pena-lambarri-VEXstplvBxs-unsplash.jpg" />
      <article>

        <blockquote className="quote">
          <p>Everest is in many ways still a blank canvas. It’s still as high, cold, and formidable as it ever was. How one chooses to climb it is as much a reflection of creativity as skill. There is always a new way to approach something, and Everest is no different.</p>
          <p className="quote__citation">&mdash; Cory Richards</p>
        </blockquote>

        <SectionImage image="/images/sections/Way_to_Everest_Base_Camp_sign.jpg" />

        <section>
          <img style={{ display: 'block', margin: '0 auto 4rem', width: '50%' }} src="/images/everest_info/mount_everest.png" alt="infographic" />
          <DataTable data={climberList} />
        </section>

        {/* <section className="section">
          <p>https://wikioo.org/paintings.php?refarticle=8EWM48&titlepainting=Path%20to%20Kailas%204&artistname=Nicholas%20Roerich</p>
          <p>Nicholas Roerich was a Russian painter, writer, archaeologist, theosophist, philosopher, and public figure, who in his youth was influenced by a movement in Russian society around the spiritual. He was interested in hypnosis and other spiritual practices and his paintings are said to have hypnotic expression.</p>
          <p>After leaving New York, the Roerichs – together with their son George and six friends – began the five-year-long &ldquo;Roerich Asian Expedition&rdquo; that, in Roerich&ldquo;s own words: started from Sikkim through Punjab, Kashmir, Ladakh, the Karakoram Mountains, Khotan, Kashgar, Qara Shar, Urumchi, Irtysh, the Altai Mountains, the Oyrot region of Mongolia, the Central Gobi, Kansu, Tsaidam, and Tibet.</p>
          <p>The influence of Theosophy, Vedanta, Buddhism, and other mystical topics can be detected not only in many of Roerich&rsquo;s paintings, but in the many short stories and poems Roerich wrote before and after the 1917 revolutions, including the Flowers of Morya cycle, begun in 1907 and completed in 1921.</p>
          <Carousel images={carouselImages} />
        </section> */}

        <section className="section">
            {/* https://www.cnn.com/2013/01/15/world/asia/everest-trash-art/index.html
        https://en.reset.org/blog/nepali-artists-turn-mount-everest-trash-art-sculptures */}
          <p>The &ldquo;Journey Towards Our Future&rdquo; exhibition of the <a href="https://www.facebook.com/groups/298768780230218/about" target="_blank" rel="noopener noreferrer">Mount Everest 8848 Art Project</a> was held at the Hotel Shangrila in Lazimpat, Nepal by Da Mind Tree. It was described as a visual symposium on upcycling of waste material from Mount Everest.</p>
          <p>Over the decades that adventurers have sought to summit Mount Everest thousands of pounds of trash have been left behind. In an effort to bring attention to the situation local Nepali artists have upcycled works of art using the materials from previous expeditions and presented their works in this exhibition.</p>
          <TabList items={trashArtGallery} />
          <p>Visit the <a href="https://www.facebook.com/groups/298768780230218/about" target="_blank" rel="noopener noreferrer">Mount Everest 8848 Art Project Facebook page</a> for more information.</p>
        </section>

        <p className="end">&spades;</p>

        <SectionImage image="/images/sections/ananya-bilimale-xdvM7wDXZy4-unsplash.jpg" />
        <TextCarousel words={textCarousel} />

        <aside className="main__aside">
          <h3>Images on this page</h3>
          <ImageIndex images={pageImages} />
        </aside>
      </article>
    </Layout>
  </>
);

export default Remote;
