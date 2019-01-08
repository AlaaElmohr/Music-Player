import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions';
import { NavLink } from 'react-router-dom'

import './SideBar.scss';

const SideBarComponent = (props) => {
  const handleLogout = ()=>{
    props.logout();
  }
  return(
      <div className="sidebar">
        <div className="logo">
         <img src = {require("../../assets/images/logo-2.png")} />
        </div>
        <div className="menu-list">
          <div className="item">
            <NavLink to="/"  activeClassName="active">
               <i className="fa fa-headphones"></i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="/recommendation"  activeClassName="active">
               <i className="fa fa-gratipay"></i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="/playlist"  activeClassName="active">
               <i className="fa fa-music"></i>
            </NavLink>
          </div>
          <div className="item">
          <NavLink to="/login"  activeClassName="active" onClick={handleLogout}>
             <i className="fa fa-sign-out"></i>
          </NavLink>
        </div>
        </div>
      </div>
  )
}

export default connect(null,{logout})(withRouter(SideBarComponent));