import React from 'react';
import './AlbumHeaderComponent.scss';
import IconComponent from '../iconComponent/IconComponent';
const AlbumHeaderComponent = (props) => {
  return(
      <div className="album-header">
       <div className="flex">
       <img src = {require(`../../../assets/images/${props.image}`)} />
       <div className="content">
         <h3>{props.title}</h3>
         <div className="m-t-10">
         <IconComponent icon="random" text="shuffle" value="345" />
         </div>
         
       </div>
       </div>
       
      
      </div>
  )
}
export default AlbumHeaderComponent;