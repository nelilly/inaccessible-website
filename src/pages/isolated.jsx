import Head from 'next/head';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import Popup from 'src/components/Popup';
import SectionImage from 'src/components/SectionImage';
import TextCarousel from 'src/components/TextCarousel';
import ImageIndex from 'src/components/ImageIndex';
import Carousel from 'src/components/Carousel';
import {
  title,
  tagline,
  description,
  carouselImages,
  textCarousel,
  pageImages,
} from 'src/data/isolated.json';

const Isolated = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </Head>
    <Layout>
      <Hero title="Isolated Art" tagline={tagline} description={description} image="/images/header/fredy-martinez-ou3fG2zWbcs-unsplash.jpg" />
      <article>

        <blockquote className="quote">
          <p>Art breaks open a dimension inaccessible to other experience, a dimension in which human beings, nature, and things no longer stand under the law of the established reality principle... The encounter with the truth of art happens in the estranging language and images which make perceptible, visible, and audible that which is no longer, or not yet, perceived, said, and heard in everyday life.</p>
          <p className="quote__citation">&mdash; Herbert Marcuse</p>
        </blockquote>

        <SectionImage image="/images/sections/annie-spratt-6Aj3eKsng8c-unsplash.jpg" />

        <section id="philadelphia" className="section">
          <p>When I was young my family moved to the Kensington neighborhood of Philadelphia. I was transfixed by the height of the buildings and the writing on the wall. Artwork would arrive in the night; in the alleys, on billboards, and hanging near the rooftops. I went to middle school at 13th &amp; Susquehanna and this section of the city wasn&rsquo;t very different. I attended high school to earn my Commercial Art diploma just a few blocks away from the intersection of Kensington and Allegheny. There on the streets throughout Philadelphia you could see the desire to make art inaccessible, not strictly born of an impulse to deface the city, but of an impulse to make a mark in the world that would remain. Delinquents, punks, and vandals made art where it couldn&rsquo;t be reached: in the solitude found on the city rooftops. So that someone, hundreds of years later, could read their message, like the ones carved on the parapet of Hagia Sophia... &ldquo;Halfdan carved these runes&rdquo;.</p>
          <p>Is it any wonder that John French Sloan and his Ashcan art speaks to me? I can just imagine him hauling his easel and supplies to the tops of buildings in the golden hour. He found a quiet beauty above the streets of the city of New York and made art on and of the rooftops.</p>
        </section>

        <blockquote className="quote">
          <p>I am not here to teach you young people any one way to draw &mdash; I am here to help you. I want to help you find a purpose, a reason for painting.</p>
          <p className="quote__citation">&mdash; John French Sloan</p>
        </blockquote>

        <section className="section">
          <p>John French Sloan was born in Lock Haven, Pennsylvania, on August 2, 1871, to James Dixon, an amateur painter and occasional businessman, and Henrietta Sloan, a schoolteacher from an affluent family. He and his two sisters were encouraged to draw and paint from an early age. At the age of seven he and his family moved to Philadelphia, Pennsylvania. In the fall of 1884 he enrolled at the prestigious Central High School, where his classmates included <Popup label="William Glackens"><><strong>William James Glackens</strong> (March 13, 1870 – May 22, 1938) was an American realist painter and one of the founders of the Ashcan School of American art. He is also known for his work in helping Albert C. Barnes to acquire the European paintings that form the nucleus of the famed <a href="https://www.barnesfoundation.org/">Barnes Foundation</a> in Philadelphia.</></Popup> and <Popup label="Albert C. Barnes"><><strong>Albert Coombs Barnes</strong> (January 2, 1872 – July 24, 1951) was an American chemist, businessman, art collector, writer, and educator, and the founder of the <a href="https://www.barnesfoundation.org/">Barnes Foundation</a> in Lower Merion, Pennsylvania to “promote the advancement of education and appreciation of the fine arts.”</></Popup>. He was mentored by <Popup label="Robert Henri"><><strong>Robert Henri</strong> (June 24, 1865 – July 12, 1929) was an American painter and teacher. He was a leading figure of the Ashcan School of American realism and an organizer of the group known as &ldquo;The Eight,&rdquo; a loose association of artists who protested the restrictive exhibition practices of the powerful, conservative National Academy of Design.</></Popup> at the Pennsylvania Academy of the Fine Arts and worked as an artist-reporter for the Philadelphia Inquirer until 1904, when he moved to New York City. In 1908 Sloan and a group of seven other men (including Glackens and Henri) rebelled against the conservatism of the National Academy of Design and formed an independent exhibition at the Macbeth Gallery. The group called <em>The Eight</em> by critics, later becoming known as the <em>Ashcan School</em>.</p>

          <h2>Ashcan Art</h2>
          <Carousel images={carouselImages} />
        </section>

        <p className="end">&spades;</p>

        <SectionImage image="/images/artists/john_sloan/sunsetWest23rd.jpg" />
        <TextCarousel words={textCarousel} />

        <aside className="main__aside">
          <h3>Images on this page</h3>
          <ImageIndex images={pageImages} />
        </aside>
      </article>
    </Layout>
  </>
);

export default Isolated;
