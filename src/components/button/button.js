import React from 'react';
import './button.css';


const Button = (props) => {
  let { width='auto', height='auto', action, name } = props;
  return(
  <div className="button" onClick={action} style={{ width, height }}>
    <span>{ name }</span>
  </div>
  )
}

export default Button;
