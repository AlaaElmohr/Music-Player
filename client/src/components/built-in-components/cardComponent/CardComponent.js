import React from 'react';
import './CardComponent.scss';
const CardComponent = (props) => {

  return(
      <div className="card">
          <div className="card-image">
           <img src = {require(`../../../assets/images/${props.image}`)} />
          </div>
          <div className="card-content">
            <p>{props.song}</p>
            <span>{props.singer}</span>
          </div>
          <div className="overlay">
            <div className="overlay-action">
              <div className="flex">
                <div className="">
                 <i className="fa fa-heart"></i>
                </div>
                <div className="">
                 <i className="fa fa-play-circle fa-2x"></i>
                </div>
                <div className="">
                 <i className="fa fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
            <div className="overlay-content">
              <p>{props.title}</p>
              <span>{props.span}</span>
            </div>
          </div>

      </div>
  )
}
export default CardComponent;