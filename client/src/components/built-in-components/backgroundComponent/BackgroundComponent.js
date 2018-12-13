import React from 'react';
import IconComponent from '../iconComponent/IconComponent';
import './BackgroundComponent.scss';

const BackgroundComponent = (props) => {
  const bg=require(`../../../assets/images/${props.image}`)
  const backgroundStyle = {
    height:`${props.height}`,
    backgroundImage: `url(${bg})`


  };
  return(
      <div className="background-image" style={backgroundStyle}>
       <div className="overlay">
        <div className="content">
        <h1>
        <span>{props.span}</span>
        {props.title}
        <br />
        {props.title2}
        </h1>
        <div className="flex m-t-30">
          <button className="btn btn-success m-r-30">play all</button>
          <IconComponent icon="share-alt" text="share" value="524"  />
        </div>
        </div>
         
       </div>
      </div>
  )
}
export default BackgroundComponent;
/**/