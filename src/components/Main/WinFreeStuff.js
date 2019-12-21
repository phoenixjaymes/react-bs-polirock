import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SectionBordered from './SectionBordered';
import SectionHeading from './SectionHeading';

const WinFreeStuff = ({data}) => {
  return (
    <SectionBordered color="blue">
      <SectionHeading color="blue" heading="Win Free Stuff" />
      <img src={`http://phoenixjaymes.com/projects/polirock/images/${data.img}`} className="float-left" alt="iPod" />
      <p>{data.text}</p>
      <p className="text-right mb-5"><Link to="/usignup">Click Here</Link></p>
    </SectionBordered>
  );
}

WinFreeStuff.propTypes = {
  data: PropTypes.object
}


export default WinFreeStuff;