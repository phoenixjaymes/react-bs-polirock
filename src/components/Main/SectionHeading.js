import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = props => {
  return (
    <h3 className={`${props.color} p-1 pl-2`}>{props.heading}</h3>
  )
}

SectionHeading.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string.isRequired
}

SectionHeading.defaultProps = {
  color: 'blue'
}

export default SectionHeading;