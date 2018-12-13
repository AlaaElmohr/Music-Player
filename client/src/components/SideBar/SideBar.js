import React from 'react';
import './SideBar.scss';
const SideBarComponent = (props) => {
  return(
      <div className="sidebar">
        <div className="logo">
         <img src = {require("../../assets/images/logo-2.png")} />
        </div>
      </div>
  )
}
export default SideBarComponent;