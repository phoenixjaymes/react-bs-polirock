import React from 'react';
import { Link } from 'react-router-dom';

import SectionHeading from './SectionHeading';

const PoliBlog = props => {
  return (
    <div className="mb-3 p-2">
      <SectionHeading heading="PoliBlog" />
      <p>Take a glimpse inside the PoliSphere</p>
      <p><Link to="/">Click Here</Link></p>
    </div>
  );
}

export default PoliBlog;