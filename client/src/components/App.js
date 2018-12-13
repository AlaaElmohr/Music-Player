import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LoginComponent from './auth/login/Login';
import SignUpComponent from './auth/signup/SignUp';
import HomeComponent from './Home/Home';
import HeaderComponent from './Header/Header';
import SideBarComponent from './SideBar/SideBar';

import './App.scss';

class App extends Component {
  render() {

    return (

      <div className="fullscreen root">
        <BrowserRouter>
          <div className="fullscreen">
            <div className="flex">
             <div className="sidebar">
               <SideBarComponent />
             </div>
             <div className="content">
               <HeaderComponent />
               <Route exact path='/home' component={HomeComponent} />
             </div>
            </div>
            <Route exact path='/login' component={LoginComponent} />
            <Route exact path='/signup' component={SignUpComponent} />
           

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
