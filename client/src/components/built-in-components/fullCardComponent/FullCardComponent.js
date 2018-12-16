import React from 'react';
import './FullCardComponent.scss';
const FullCardComponent = (props) => {
  const bg=require(`../../../assets/images/${props.image}`)
  const backgroundStyle = {
    backgroundImage: `url(${bg})`
  };
  return(
      <div className="full-card" style={backgroundStyle}>
           <div className="overlay">
            <div className="card-content">
            <h3>{props.singer}</h3>
            <span>{props.genre}</span>
            </div>
           </div>
      </div>
  )
}
export default FullCardComponent;