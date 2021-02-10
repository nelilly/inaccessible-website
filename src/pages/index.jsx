import Head from 'next/head';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import SectionImage from 'src/components/SectionImage';
import Todo from 'src/components/Todo';
import TextCarousel from 'src/components/TextCarousel';
import ImageIndex from 'src/components/ImageIndex';
import {
  title,
  tagline,
  description,
  hikingList,
  textCarousel,
  pageImages,
} from 'src/data/home.json';

const Home = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </Head>
    <Layout>
      <Hero title="Inaccessible Art" tagline={tagline} description={description} image="images/header/ian-chen-wrrgZwI7qOY_1900.jpg" />
      <article>
        <div className="quote">
          <p>From inaccessible mountain range by way of desert untrod by human foot to the ends of the unknown seas, the breath of the everlasting creative spirit is felt, rejoicing over every speck of dust that hearkens to it and lives.</p>
          <p className="quote__citation">&mdash; Johann Wolfgang von Goethe</p>
        </div>

        <SectionImage image="images/sections/hu-chen-FZ0qzjVF_-c-unsplash.jpg" backgroundPosition="center center" transform="scaleX(-1)" />

        <div className="section">
          <p>People often ask me why I strap art supplies onto my back &mdash; canvas and paper, a travel easel, the variety of paints and charcoals, brushes and turpenoids and mediums &mdash; in a 20 pound kit of avante-garde <em>materiel</em> to be hauled to remote locations, just to make <em>art</em>? I could say that I feel that, when I&rsquo;m on the mountain top, that I&rsquo;m full of potential. That I&rsquo;m inspired by the Hudson River School. Maybe I&rsquo;ve read <a href="https://www.amazon.com/John-Sloan-Drawing-Painting/dp/0486409473/">John French Sloan&rsquo;s <em>The Gist of Art</em></a> one too many times? And I&rsquo;m attempting to make another painting. Another landscape titled: <em>I was in Montauk Point in June; and nature was pretty; the sun threw purple shadows north-northwest.</em></p>

          <p>But to be completely honest: I&rsquo;m not sure why I do it myself. The act has lost all meaning.</p>

          <p>I&rsquo;ve come to accept the deeper parts of myself that I don&rsquo;t understand. I throw my hands up and listen to and live with the parts that just <em>are</em>. We occassionally give each other a knowing glance, and tear off into the woods to make some <em>thing</em>. Performing a clumsy attempt at finding the boundaries of my <em>umwelt</em>. To give me something to write about where I can emphasize the end of every <em>line</em>.</p>

          <p>In a sense, I think, it&rsquo;s an callback to primitive life, nested within other more archaic callbacks. Let&rsquo;s consider humanity&rsquo;s early nature creating art, inexplicably, in the remotest of locations; The palimpsest of animal fats and stone pigments on the walls in the deepest bellies of caves; The congeries of lines uncovered in the landscape of the desert; The figurines cultivated by exposing the chalk on far off hills. Maybe it&rsquo;s just human instinct to go some where unreachable and put your hands on it. Now, any thoughts of attempting parietal art gives me the feeling that I&rsquo;d be commiting an act of vandalism. So, the art is made in inaccessible places &mdash; intentionally, in the passive voice, in the way that every artist knows how art is made &mdash; and it comes back with me.</p>
        </div>

        <p className="end">&spades;</p>

        <section className="section">
          <h2>Artist&rsquo;s Hiking Equipment</h2>
          <img src={`${process.env.ASSET_PREFIX}images/travel_kits/camille_pissarro.jpg`} alt="Camille Pissarro" />
          <Todo
            title="Art Hike Prep List"
            list={hikingList}
          />

          <h3>Rules for Hiking</h3>
          <ol>
            <li>Don’t hike alone.</li>
            <li>Check weather reports.</li>
            <li>Dress appropriately.</li>
            <li>Have a map of the area.</li>
            <li>Be prepared.</li>
          </ol>
          <h3>Before You Hike</h3>
          <ol>
            <li>Learn proper hiking and camping practices for your area.</li>
            <li>Buy a good pair of hiking boots.</li>
            <li>Bring drinking water. Have extra water back at your base camp.</li>
            <li>Get in shape. Don&rsquo;t attempt a 12-mile hike your first time out.</li>
            <li>Start out small. Begin with short day trips with just a sketchbook before attempting overnight trips with a full studio kit.</li>
            <li>Think about what you&rsquo;ll need in the field. If you forget something in your studio you will have to live without it.</li>
          </ol>
        </section>

        <SectionImage image="images/sections/Cole_Thomas_The_Oxbow_1836.jpg" />
        <TextCarousel words={textCarousel} />

        <aside className="main__aside">
          <h3>Images on this page</h3>
          <ImageIndex images={pageImages} />
        </aside>
      </article>
    </Layout>
  </>
);

export default Home;
