import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SectionHeading from './SectionHeading';

// import TopNomineesList from '../../data/topNomineesList';

const TopNominees = ({topNominees}) => {
  const nominees = topNominees.map( (nominee, index) => {
    let nomName = nominee.label !== 'Top Voter' ? <Link to={nominee.path}>{nominee.name}</Link> : nominee.name;

    return (
      <li key={index}>
        <span className="nominee-label">{nominee.label}:</span>{nomName}
      </li>
    );
  });

  return (
    <div className="mb-3 p-2">
      <SectionHeading heading="Top Nominees" />
      <ul className="top-nominees">
        {nominees}
      </ul>
    </div>
  );
}

TopNominees.propTypes = {
  topNominees: PropTypes.array
}

export default TopNominees;