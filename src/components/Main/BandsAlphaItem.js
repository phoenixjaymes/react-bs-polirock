import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const BandsAlpha = ({bid, name}) => {
  return (
    <li><Link to={`/band-profile-page/${bid}`}>{name}</Link></li>      
  );
}

BandsAlpha.propTypes = {
  bid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default BandsAlpha;