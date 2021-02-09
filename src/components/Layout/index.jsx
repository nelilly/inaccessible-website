import PropTypes from 'prop-types';
import Link from 'next/link';
import { main } from './style.module.css';
import Nav from 'src/components/Nav';
import Menu from 'src/components/Menu';
import Notice from 'src/components/Notice';
import data from 'src/data/_global.json';

const Layout = ({ children }) => (
  <>
    <header className="site__header">
      <Nav />
      <Notice message="&#9755; NOTICE: There is risk of serious injury posed by emulating activities performed on this site. Participate at your own discretion." level="warning" />
    </header>
    <div id="main" className={main}>{children}</div>
    <footer className="site__footer">
      <noscript>
        <Menu open={false} />
      </noscript>
      <section className="site__colophon">
        <h3>About</h3>
        <p>This site was made by <a href="https://lilly.art/">N.E.Lilly</a> in the Greater Philadelphia area, circa 2019. Visit the <Link href="/colophon">Colophon</Link> page for technical details.</p>
        <ul>
          <li><a href="https://github.com/nelilly/inaccessible-website/">Inaccessible Website GitHub Repository</a></li>
          <li><a href="https://github.com/nelilly/a11y-manual-testing/">a11y-manual-testing GitHub Repository</a></li>
          <li><a href="https://github.com/nelilly/a11y-workflow/">a11y-workflow GitHub Repository</a></li>
        </ul>
      </section>
      <section className="site__connect">
        <h3>Connect</h3>
        <ul>
          <li>
            <a href="https://lilly.art/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 95c26 0 21-48 47-48 0-11-19-21-32-4 0-18-1-26-15-38-14 12-15 20-15 38-13-17-32-7-32 4 26 0 21 48 47 48z" /></svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/nelilly/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                <path fill="currentColor" d="M14.06 11.92c.39 0 .72.19 1 .58.28.38.43.86.43 1.42 0 .56-.14 1.04-.43 1.42-.28.38-.62.58-1 .58-.41 0-.76-.19-1.05-.58-.28-.38-.42-.86-.42-1.42s.14-1.04.42-1.42c.29-.39.64-.58 1.05-.58zm5.03-5.2c1.1 1.19 1.65 2.63 1.65 4.32 0 1.1-.13 2.08-.38 2.96-.25.87-.57 1.59-.96 2.14s-.86 1.04-1.43 1.44c-.57.42-1.09.72-1.56.91-.47.19-1.01.34-1.63.45-.61.11-1.06.16-1.38.18-.31.01-.64.02-1 .02-.08 0-.35.01-.8.02-.44.02-.82.03-1.11.03-.29 0-.67-.01-1.11-.03-.45-.01-.72-.02-.8-.02-.36 0-.7 0-1-.02-.32-.02-.78-.07-1.38-.18-.62-.1-1.16-.25-1.63-.45-.47-.19-.99-.49-1.56-.91a6.3 6.3 0 01-1.43-1.44C1.2 15.59.88 14.88.62 14c-.25-.88-.38-1.86-.38-2.96 0-1.69.55-3.13 1.65-4.32-.1-.06-.11-.66 0-1.78.1-1.13.34-2.17.73-3.12 1.37.14 3.06.92 5.07 2.32.68-.18 1.62-.27 2.8-.27 1.25 0 2.18.09 2.81.27.92-.62 1.8-1.13 2.64-1.52.85-.38 1.47-.61 1.85-.67l.58-.13c.39.95.63 1.99.73 3.12.11 1.12.11 1.72-.01 1.78zm-8.54 11.43c2.46 0 4.32-.3 5.58-.89 1.26-.59 1.9-1.81 1.9-3.65 0-1.07-.4-1.96-1.2-2.67-.41-.39-.9-.62-1.45-.71-.54-.09-1.38-.09-2.51 0s-1.9.13-2.31.13c-.56 0-1.18-.03-1.94-.09s-1.36-.09-1.78-.11c-.44-.01-.9.04-1.4.16-.51.12-.92.32-1.25.62-.77.69-1.16 1.58-1.16 2.68 0 1.84.62 3.06 1.87 3.65 1.24.6 3.1.89 5.56.89h.09zm-3.56-6.23c.39 0 .72.19 1 .58.28.38.42.86.42 1.42 0 .56-.14 1.04-.42 1.42-.28.38-.62.58-1 .58-.42 0-.77-.19-1.05-.58-.28-.38-.42-.86-.42-1.42s.14-1.04.42-1.42c.28-.39.63-.58 1.05-.58z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/nelilly/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1 19 21">
                <path fill="currentColor" d="M1.707 0a1.708 1.708 0 11-.004 3.415A1.708 1.708 0 011.707 0zM.234 14.19V4.711h2.945v9.477H.234zm4.792-9.478h2.821v1.295h.04c.393-.746 1.353-1.53 2.785-1.53 2.978 0 3.53 1.961 3.53 4.514v5.198H11.26V9.582c0-1.1-.021-2.515-1.53-2.515-1.531 0-1.764 1.198-1.764 2.433v4.69h-2.94V4.711z" transform="translate(.479 .48)" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/nelilly/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 23">
                <path fill="currentColor" d="M17.996 4.064C18.255 9.851 13.941 16.3 6.303 16.3A11.59 11.59 0 010 14.449a8.247 8.247 0 006.088-1.705 4.11 4.11 0 01-3.84-2.859c.645.12 1.282.086 1.86-.069C2.126 9.42.765 7.638.808 5.726c.551.31 1.189.49 1.86.517A4.119 4.119 0 011.395.749a11.637 11.637 0 008.473 4.305C9.265 2.48 11.22 0 13.872 0c1.18 0 2.256.5 3.005 1.3a8.047 8.047 0 002.609-.999 4.102 4.102 0 01-1.808 2.274 8.245 8.245 0 002.359-.646 8.031 8.031 0 01-2.04 2.135z" transform="translate(0,2)" />
              </svg>
            </a>
          </li>
        </ul>
      </section>
      <section id="nav">.</section>
      <section className="site__copyright">
        <p>{data.copyright}</p>
      </section>
    </footer>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
