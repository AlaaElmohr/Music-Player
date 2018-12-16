import React from 'react';
import { Slider, Direction,PlayerIcon } from 'react-player-controls'

import './MusicPlayerComponent.scss';
const MusicPlayerComponent = (props) => {
  return(
      <div className="music-player">
        <div className="flex">
          <i className="fa fa-step-backward fa-1x" />
          <i className="fa fa-play-circle fa-2x" />
          <i className="fa fa-step-forward fa-1x" />
          <div className="volume">
           <i className="fa fa-volume-up fa-1x" />
          </div>
        </div>
        
      </div>
  )
}
export default MusicPlayerComponent;