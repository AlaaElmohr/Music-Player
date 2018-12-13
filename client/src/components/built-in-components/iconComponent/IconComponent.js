import React from 'react';
import './IconComponent.scss';
const IconComponent = (props) => {
  return(
      <div className="flex icon">
       <i className="fa fa-share-alt"></i>
       <h6>{props.text} ({props.value})</h6>
      </div>
  )
}
export default IconComponent;