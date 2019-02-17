import React from 'react';
import './circle.css';

const Circle = (props) => {
  let { color } = props || '#fff';
  return(
    <div className='circle' style={{background: color}} />
  )
}

export default Circle;
