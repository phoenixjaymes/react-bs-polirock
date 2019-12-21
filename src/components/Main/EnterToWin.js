import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SectionBordered from './SectionBordered';
import SectionHeading from './SectionHeading';

const EnterToWin = ({data}) => {
  return (
    <SectionBordered color="red">
      <SectionHeading color="red" heading="Enter Your Band To Win" />
      <p>{data.text}</p>
      <p className="text-center font-weight-bold h3">{data.prize}</p>
      <p className="text-right"><Link to="/bsignup">Click Here</Link></p>
    </SectionBordered>
  );
}

EnterToWin.propTypes = {
  data: PropTypes.object
}

export default EnterToWin;