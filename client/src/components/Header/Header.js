import React from 'react';
import './Header.scss';
const HeaderComponent = (props) => {
  return(
      <div className="header">
       <div className="item-list">
        <div className="item active">home</div>
        <div className="item">recommended</div>
        <div className="item">playlists</div>
        <div className="item">mood</div>
       </div>
        
      </div>
  )
}
export default HeaderComponent;