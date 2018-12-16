import React from 'react';
import './IconComponent.scss';
const IconComponent = (props) => {
  return(
      <div className="icon">
        <div className="flex">
        <i className="fa fa-share-alt"></i>
        <h6>{props.text} ({props.value})</h6>
        </div>
      
      </div>
  )
}
export default IconComponent;