import React from 'react';
import PropTypes from 'prop-types';

import BandsItem from './BandsItem';

const BandsContainer = ({ data }) => {
  const bandList = data.map(band => (
    <BandsItem key={band.id} band={band} />
  ));

  return (
    <div>
      {bandList}
    </div>
  );
};

BandsContainer.propTypes = {
  data: PropTypes.arrayOf({
    details: PropTypes.object,
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    party: PropTypes.string,
    path: PropTypes.string,
    rank: PropTypes.string,
    song: PropTypes.string,
    votes: PropTypes.string,
  }),
};

export default BandsContainer;
