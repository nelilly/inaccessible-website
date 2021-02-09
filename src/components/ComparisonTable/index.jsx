import PropTypes from 'prop-types';

import {
  table,
} from './style.module.css';

const Header = ({ caption, description }) => (
  <article className={table}>
    <p>{description}</p>
    <table role="table">
      <caption>{caption}</caption>
      <thead>
        <tr role="row">
          <th>&nbsp;</th>
          <th scope="col">Edmund Burke</th>
          <th scope="col">Immanuel Kant</th>
          <th scope="col">Arthur Schopenhauer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Core Work</th>
          <td data-label="Edmund Burke: ">Pleasures of the Imagination</td>
          <td data-label="Immanuel Kant: ">Observations on the Feeling of the Beautiful and Sublime</td>
          <td data-label="Arthur Schopenhauer: ">The World as Will and Representation</td>
        </tr>
        <tr>
          <th scope="row">Year</th>
          <td data-label="Edmund Burke: ">1744</td>
          <td data-label="Immanuel Kant: ">1764</td>
          <td data-label="Arthur Schopenhauer: ">1818</td>
        </tr>
        <tr>
          <th scope="row">&Phi;</th>
          <td data-label="Edmund Burke: ">Sublimity and beauty are mutually exclusive.</td>
          <td data-label="Immanuel Kant: ">There are three kinds of sublime experience: the noble, the splendid, and the terrifying.</td>
          <td data-label="Arthur Schopenhauer: ">The sublime is observing an overpowering or vast malignant object of great magnitude, one that could destroy the observer.</td>
        </tr>
      </tbody>
    </table>
    {/* <table role="table">
      <thead>
        <tr role="row">
          <th>Features</th>
          <th>Basic</th>
          <th>Pro</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">White space</th>
          <td data-label="Basic">✗</td>
          <td data-label="Pro">✓</td>
        </tr>
        <tr>
          <th scope="row">Existential dread</th>
          <td data-label="Basic">✓</td>
          <td data-label="Pro">✓</td>
        </tr>
      </tbody>
    </table> */}
  </article>
);

export default Header;

Header.propTypes = {
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
