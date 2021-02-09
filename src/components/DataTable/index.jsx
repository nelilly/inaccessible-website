import PropTypes from 'prop-types';

import {
  dataTable,
} from './style.module.css';

const DataTable = ({ data }) => (
  <table className={dataTable}>
    <caption className="data__caption">
      Notable Climbers To Summit Mount Everest
    </caption>
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Route</th>
        <th>Note</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((row) => (
          <tr key={`updated_${row.name}`}>
            <th data-label="Name: ">{row.name}</th>
            <td data-label="Date: ">{row.date}</td>
            <td data-label="Route: ">{row.route}</td>
            <td data-label="Note: ">{row.note}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default DataTable;

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      createdAt: PropTypes.string,
      description: PropTypes.string,
      forkCount: PropTypes.number,
      isArchived: PropTypes.bool,
      languages: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string,
          }),
        })),
      }),
      name: PropTypes.string,
      repositoryTopics: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            topic: PropTypes.shape({
              name: PropTypes.string,
            }),
          }),
        })),
      }),
      stargazerCount: PropTypes.number,
      updatedAt: PropTypes.string,
      url: PropTypes.string,
    }),
  })).isRequired,
};
