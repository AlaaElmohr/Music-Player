import React from 'react';
import './MoodCardComponent.scss';
const MoodCardComponent = (props) => {
  const bg=require(`../../../assets/images/${props.image}`)
  const backgroundStyle = {
    backgroundImage: `url(${bg})`
  };
  return(
      <div className="mood-card" style={backgroundStyle}>
           <div className="overlay">
            <h3>{props.genre}</h3>
           </div>
      </div>
  )
}
export default MoodCardComponent;