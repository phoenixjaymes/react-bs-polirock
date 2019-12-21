import React from 'react';
import PropTypes from 'prop-types';

import SectionHeading from './SectionHeading';

const ContestCountdown = ({daysUntil}) => {
  return (
    <div className="mb-3 p-2">
      <SectionHeading heading="Days Left in Current Constest" />
      <p className="p-1"><strong>{daysUntil}</strong> days left until we have to vote for another crazy person to run the country!</p>
    </div>
  );
}

ContestCountdown.propTypes = {
  daysUntil: PropTypes.string
}

export default ContestCountdown;