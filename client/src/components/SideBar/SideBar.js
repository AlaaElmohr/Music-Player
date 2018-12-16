import React from 'react';
import { NavLink } from 'react-router-dom'

import './SideBar.scss';

const SideBarComponent = (props) => {
  return(
      <div className="sidebar">
        <div className="logo">
         <img src = {require("../../assets/images/logo-2.png")} />
        </div>
        <div className="menu-list">
          <div className="item">
            <NavLink to="/home"  activeClassName="active">
               <i className="fa fa-headphones"></i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="/mood"  activeClassName="active">
               <i className="fa fa-gratipay"></i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="/recommendation"  activeClassName="active">
               <i className="fa fa-podcast"></i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="/playlist"  activeClassName="active">
               <i className="fa fa-music"></i>
            </NavLink>
          </div>
        </div>
      </div>
  )
}
export default SideBarComponent;