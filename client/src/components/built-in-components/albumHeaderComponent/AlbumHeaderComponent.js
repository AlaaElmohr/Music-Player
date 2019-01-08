import React from 'react';
import './AlbumHeaderComponent.scss';
import IconComponent from '../iconComponent/IconComponent';
const AlbumHeaderComponent = (props) => {
  const renderContent=()=>{
    if(props.type =='album'){
      return <IconComponent icon="random" text="shuffle" value="345" />
    }
    if(props.type =='lyric'){
      return <p>{props.singer}</p>
    }
  }
  return(
      <div className="album-header">
       <div className="flex">
       <img src = {props.image} />
       <div className="content">
         <h5>{props.title}</h5>
         <div className="m-t-10">
          {renderContent()}
         </div>
         
       </div>
       </div>
       
      
      </div>
  )
}
export default AlbumHeaderComponent;