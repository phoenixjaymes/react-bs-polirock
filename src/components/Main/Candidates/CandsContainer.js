import React from 'react';
import PropTypes from 'prop-types';

import CandsItem from './CandsItem';

const CandsContainer = ({ data }) => {
  const candList = data.map(cand => (
    <CandsItem key={cand.id} cand={cand} />
  ));

  return (
    <div>
      {candList}
    </div>
  );
};

CandsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    details: PropTypes.object,
    hometown: PropTypes.string,
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    party: PropTypes.string,
    rank: PropTypes.string,
    votes: PropTypes.string,
  })),
};

export default CandsContainer;
