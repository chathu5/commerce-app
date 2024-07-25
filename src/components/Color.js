import React from 'react';
import PropTypes from 'prop-types'; 

const Color = ({ colors = [] }) => {
  return (
    <ul className="colors ps-0 d-flex gap-10">
      {colors.map((color, index) => (
        <li
          key={index}
          style={{
            backgroundColor: color,
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '1px solid #ddd' 
          }}
        ></li>
      ))}
    </ul>
  );
};


Color.propTypes = {
  colors: PropTypes.array
};

export default Color;