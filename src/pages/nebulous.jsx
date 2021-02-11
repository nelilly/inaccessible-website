import Head from 'next/head';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import SectionImage from 'src/components/SectionImage';
import ComparisonTable from 'src/components/ComparisonTable';
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
} from 'src/data/nebulous.json';

const Distant = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </Head>
    <Layout>
      <Hero title="Nebulous Art" tagline={tagline} description={description} color="#a75234" image="images/header/michael-weidner-h-rP5KSC2W0-unsplash.jpg" />
      <article>
        <blockquote className="quote">
          <p>Nature is beautiful because it looks like Art; and Art can only be called beautiful if we are conscious of it as Art while yet it looks like Nature.</p>
          <p className="quote__citation">&mdash; Immanuel Kant</p>
        </blockquote>

        <SectionImage image="images/sections/sean-thoman-S4zOFuEGZmw-unsplash.jpg" />

        <section id="clouds" className="section">
          <p>Technological leaps in the 19th century made the artist’s supplies and materials more portable than ever before and allowed the artist to get out of the studio to places previously undreamt of. The invention of tin tubes in 1841 — coinciding with the development of portable canvases, box easels, and pochade boxes — allowed artists to organize a portable studio so that they could paint directly from the landscape: <em>En plein air</em> (French for “outdoors”), or as it’s frequently called <em>Plein Air</em> painting.</p>
          <p>The practice of <em>plein air</em> painting was first described in <em>Reflections and Advice to a Student on Painting, Particularly on Landscape</em> by <em>Pierre-Henri de Valenciennes</em>, published in 1800. This practice of painting in natural light was taken up by the Barbizon school which in turn influenced the Romantice movement, notably the Düsseldorf and Hudson River Schools and then Impressionists.</p>
        </section>

        <ComparisonTable caption="Comparing The Sublime" description="In aesthetics, the sublime is the quality of greatness, whether physical, moral, intellectual, metaphysical, aesthetic, spiritual, or artistic. The term especially refers to a greatness beyond all possibility of calculation, measurement, or imitation." />

        <blockquote className="quote">
          <p>I must stay alone and know that I am alone to contemplate and feel nature in full; I have to surrender myself to what encircles me, I have to merge with my clouds and rocks in order to be what I am.</p>
          <p className="quote__citation">&mdash; Caspar David Friedrich</p>
        </blockquote>

        <section className="section">
          <p>Caspar David Friedrich is considered the most important landscape painter of the 19th century Romantic movement in Germany. The Romantic movement emphasized intense emotion as an authentic source of aesthetic experience, placing new emphasis on such emotions as apprehension, horror and terror, and awe — especially that experienced in confronting the new aesthetic categories of the sublimity and beauty of nature. Which depicted: ancient ruins of the old world; Gothic feelings of death and decay; the ideal that Nature is powerful and will eventually overcome the transient creations of men.</p>
          <p>Friedrich’s primary interest as an artist was the contemplation of nature. He created the notion of <em>die romantische Stimmungslandschaft</em> — a landscape full of Romantic feeling. Friedrich is best known for his later landscapes and the employment of the <em>Rückenfigur</em>: a figure whom the viewer is encouraged to place themselves in the position of and through whom they experience the sublime potential of nature.</p>
          <p>The Expressionists in the 1920s were influenced by Friedrich’s works. The Surrealists and Existentialists in the 1930s and 1940s frequently drew ideas from Friedrich’s art.</p>

          <h2>Sublime Art</h2>
          <Carousel images={carouselImages} />
        </section>

        <p className="end">&spades;</p>

        <SectionImage image="images/artists/caspar_david_friedrich/wanderer_above_the_sea_of_fog.jpg" backgroundPosition="center center" />
        <TextCarousel words={textCarousel} />

        <aside className="main__aside">
          <h3>Images on this page</h3>
          <ImageIndex images={pageImages} />
        </aside>
      </article>
    </Layout>
  </>
);

export default Distant;
