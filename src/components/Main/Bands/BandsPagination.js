import React from 'react';
import PropTypes from 'prop-types';

const BandsPagination = ({ heading }) => (
  <div>
    <p>{heading}</p>
  </div>
);

BandsPagination.propTypes = {
  heading: PropTypes.string,
};

export default BandsPagination;
