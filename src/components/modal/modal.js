import React from 'react';
import './modal.css';


const Modal = (props) => {
  let { width, height, children, value, title } = props
  return(
  <div className="modal" style={{width: width||'auto', height: height||'auto'}}>
    { title ? <h4>{ title }</h4> : ""  }
    { value ? <h5>{ value }</h5> : "" }
    { children }
  </div>
  )
}

export default Modal;
