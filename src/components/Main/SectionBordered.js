import React from 'react';

const SectionBordered = props => {
  return (
    <div className={`${props.color} mb-3 p-2`}>
      {props.children}
    </div>
  );
}

export default SectionBordered;