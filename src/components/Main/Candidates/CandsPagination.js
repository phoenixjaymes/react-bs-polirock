import React from 'react';
import PropTypes from 'prop-types';

const CandsPagination = ({ heading }) => (
  <div>
    <p>{heading}</p>
  </div>
);

CandsPagination.propTypes = {
  heading: PropTypes.string,
};

export default CandsPagination;
