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
import MusicPlayerComponent from './built-in-components/musicPlayerComponent/MusicPlayerComponent';
import ProfileComponent from './Profile/Profile';
import RecommendationComponent from './Recommendation/Recommendation';
import MoodComponent from './Mood/Mood';
import PlayListComponent from './PlayList/PlayList';
import SearchComponent from './Search/Search';

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
               <div className="routes">
                 <Route exact path='/home' component={HomeComponent} />
                 <Route exact path='/playlist' component={PlayListComponent} />
                 <Route exact path='/recommendation' component={RecommendationComponent} />
                 <Route exact path='/profile' component={ProfileComponent} />
                 <Route exact path='/mood' component={MoodComponent} />
                 <Route exact path='/search' component={SearchComponent} />
               </div>
               
             </div>
             <MusicPlayerComponent />
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
