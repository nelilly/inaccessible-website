import Head from 'next/head';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import SectionImage from 'src/components/SectionImage';
import Autocomplete from 'src/components/Autocomplete';
import PersonalityTest from 'src/components/PersonalityTest';
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
} from 'src/data/unreachable.json';
import {
  planets,
} from 'src/data/planetSearch.json';

const Unreachable = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </Head>
    <Layout>
      <Hero title="Unreachable Art" tagline={tagline} description={description} image="images/header/voyager_pale_blue_dot.jpg" />
      <article>
        <blockquote className="quote">
          <p>There is perhaps no better a demonstration of the folly of human conceits than this distant image of our tiny world.</p>
          <p className="quote__citation">&mdash; Carl Sagan</p>
        </blockquote>

        <SectionImage image="images/sections/cassini_pale_blue_dot.jpg" backgroundPosition="center center" />

        <section id="planetSearch" className="section">
          <p>Character is what you are in the dark, according to Dwight L. Moody. If you&rsquo;ve ever been on a nighttime hike you may know what he means. The solitude; the quiet; the sublime feeling of the evening air. Being just another wanderer, staring into the night sky. And as we stare into the night sky, and we find ourselves.</p>

          <h2>Objects in Space</h2>
          <Autocomplete terms={planets} />
        </section>

        <section className="section">
          <p>Astrology is the art of predicting the future based on the belief that the positions of objects in space have an influence on a person&rsquo;s character and their fortunes in life. It&rsquo;s easy to look up at the stars and believe they have some significance.</p>
          <PersonalityTest title="What planet are you?" questions={[{ question: 'What is your birthday?' }, { question: 'Do you prefer the warmth or the cold?' }, { question: 'Are you an introvert or an extrovert?' }]} />
        </section>

        <section className="section">
          {/* <form action="" method="get">
            <fieldset>
              <legend>Formal elements</legend>
              <div>CSS Radios</div>
              <label className="container">Yes
                <input name="radio" type="radio" />
                <span className="radio"></span>
              </label>
              <label className="container">No
                <input name="radio" type="radio" />
                <span className="radio"></span>
              </label>

              <div>CSS Checks</div>
              <label className="container">One
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <label className="container">Two
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <label className="container">Three
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <label className="container">Four
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <div>CSS Toggle</div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>

              <div>
                <label htmlFor="volume">Volume
                  <input
                    type="range"
                    id="volume"
                    name="volume"
                    min="0"
                    max="11"
                  />
                </label>
              </div>

              <select name="selection">
                <option>Mercury</option>
                <option>Venus</option>
                <option>Earth</option>
                <option>Mars</option>
                <option>Jupiter</option>
                <option>Saturn</option>
                <option>Uranus</option>
                <option>Neptune</option>
              </select>
              <button type="submit">Submit</button>
            </fieldset>
          </form> */}
        </section>

        <blockquote className="quote">
          <p>
            Is the whole of life visible to us? Why shouldn&rsquo;t shining dots of the sky be as accessible as the black dots on the map of France? Just as we take the train to get to Ruoen, we take death to reach a star. Are we not entitled to hope that there may possibly be other and better conditions for painting than here on Earth?
            {/* It is not the language of painters but the language of nature which one should listen to, the feeling for the things themselves, for reality is more important than the feeling for pictures. */}
            {/* …the starry sky at last, actually painted at night, under a gas-lamp. The sky is green-blue, the water is royal blue, the areas of land are mauve. The town is blue and violet. The gaslight is yellow, and its reflections are red gold and go right down to green bronze. Against the green-blue field of the sky the Great Bear has a green and pink sparkle whose discreet paleness contrasts with the harsh gold of the gaslight. Two small coloured figures of lovers in the foreground. */}
            {/* At present I absolutely want to paint a starry sky. It often seems to me that night is still more richly coloured than the day; having hues of the most intense violets, blues and greens. If only you pay attention to it you will see that certain stars are lemon&#8209;yellow, others pink or a green, blue and forget&#8209;me&#8209;not brilliance. And without my expatiating on this theme it is obvious that putting little white dots on the blue&#8209;black is not enough to paint a starry sky. */}
          </p>
          <p className="quote__citation">&mdash; Vincent van Gogh</p>
        </blockquote>

        <section className="section">
          <p>Vincent van Gogh became one of the most famous and influential figures in the post-impressionist movement and in the history of Western art. In the last decade of his life, he created about 2,100 artworks, including around 860 oil paintings, most of which date from his final two years. His artwork was characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. Much of his life and thougths were well documented &mdash; in his art; in his journals; in his letters to his brother Theo.</p>
          <Carousel images={carouselImages} />
        </section>
        <p className="end">&spades;</p>

        <SectionImage image="images/artists/vincent_van_gogh/road_with_cypress_and_star.jpg" />
        <TextCarousel words={textCarousel} />

        <aside className="main__aside">
          <h3>Images on this page</h3>
          <ImageIndex images={pageImages} />
        </aside>
      </article>
    </Layout>
  </>
);

export default Unreachable;
