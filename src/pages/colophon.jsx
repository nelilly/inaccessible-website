import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { formatDate } from 'src/shared/formatDate';
import Layout from 'src/components/Layout';
import { title } from 'src/data/colophon.json';

const asOf = () => formatDate(new Date());

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: asOf(),
    },
  };
}

const Colophon = ({ lastUpdated }) => {
  const [browser, setBrowser] = useState({});

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    const { platform, appName, userAgent } = navigator;
    setBrowser({
      innerHeight,
      innerWidth,
      height: window.screen.height,
      width: window.screen.width,
      platform,
      appName,
      userAgent,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Inaccessible Sites: {title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      </Head>
      <Layout>
        <article>
          <h1>{title}</h1>
          <div className="quote">
            <p>Far too few designers put any thought into usability, ending up with a great product that&rsquo;s completely inaccessible.</p>
            <p className="quote__citation">&mdash; James Dyson</p>
          </div>
          <section className="section">
            <p>Accessibility isn&rsquo;t a mysterious set of practices and technologies. <strong><em>Accessibility development</em> is <em>usability</em> for assitive technology devices</strong>; just like <em>responsive design</em> tends to be usability for mobile devices. The problem is that most temporarily abled developers never think about — or sometimes even become aware of — the challenges that people using assitive technologies may face. The purpose of this site is to showcase accessibility (A11Y) issues and allow developers to learn how to fix them. On the surface the site appears to be well&#8209;designed but contains accessibility issues that other developers can discover and remediate. Your goal should be to find and fix those issues: make this site <em>usable</em> for assistive technology devices. Just as in usability: the right answer is the one that let&rsquo;s the user accomplish their goals.</p>
            <p>After years of drilling accessibility design practices into my workflow so that they become second nature it was a challenge to build a site that was generally usable, but failed on the accessible level. Luckily I was able to draw from a wealth of tutorials online. While these tutorials show you how to build a a variety of widgets, often they fail at the most basic of accessibility concepts. That&rsquo;s not entirely their fault.</p>
          </section>
          <p className="end">&sect;</p>
          <section className="section">
            <p>A colophon is a page at the back of a book, originating from the Greek word for “summit”. The purpose of a colophon is to give the reader information about the book&rsquo;s authorship and construction methods. It is the final touch put on the work.</p>
            <p>This site was designed and developed using <a href="https://jamstack.org/">JAM stack principles</a>, the <a href="https://reactjs.org/">React</a> library with <a href="https://nextjs.org/">Next.js</a> and served on <a href="https://pages.github.com/">GitHub Pages</a>. This site is not copy&#8209;protected. It is currently displayed on {browser.platform} platform in the {browser.appName} browser [{browser.userAgent}] with a screen size of {browser.height} × {browser.width} and document size of {browser.innerHeight} × {browser.innerWidth} (if your browser is being honest). The main navigation icon is a ship&rsquo;s wheel in homage to Netscape Navigator, and because I hate the hamburger. Last modified on {lastUpdated}.</p>
            <hr />
            <p>In addition to the <a href="https://github.com/nelilly/inaccessible-website">Inaccessible Website Repository</a> for this site, here are other repositories that you might find helpful when developing accessible sites:</p>
            <dl>
              <dt><a href="https://github.com/nelilly/a11y-manual-testing">A11y Manual Testing Repository</a></dt>
              <dd>An accessibility resource for manual testing, debugging, and defect remediation.</dd>
              <dt><a href="https://github.com/nelilly/a11y-workflow">A11y Workflow Repository</a></dt>
              <dd>Code and NPM packages to implement automated accessibility testing in your workflow.</dd>
            </dl>
          </section>

          <p className="end">&spades;</p>
        </article>
      </Layout>
    </>
  );
};

Colophon.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

export default Colophon;
