import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
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
import PlayListsComponent from './PlayLists/PlayLists';
import PlayListComponent from './PlayList/PlayList';

import SearchComponent from './Search/Search';
import {requireAuthentication} from './AuthenticatedComponent/AuthenticatedComponent';
import NotFoundComponent from './404/NotFoundComponent';


class App extends Component {
  componentWillMount(){
    if(localStorage.getItem('token')){
    this.props.getPlayLists();
    this.props.getFavourites();
    this.props.getNewRelease();
    this.props.getArtistYouMayLike();
    this.props.getRecommendation();
  }
}
  render() {

    return (

      <div className="fullscreen root">
        <BrowserRouter>
          <div className="fullscreen">
          <Switch>

          <Route exact path='/login' component={LoginComponent} />
          <Route exact path='/signup' component={SignUpComponent} />
            <div className="flex">
             <div className="sidebar">
               <SideBarComponent />
             </div>
             <div className="content">
               <HeaderComponent location={this.props.location}/>
               <div className="routes">
                 <Switch>
               
                 <Route exact path='/' component={HomeComponent} />
                 <Route exact path='/playlists' component={requireAuthentication(PlayListsComponent)} />
                 <Route exact path='/playlist' component={requireAuthentication(PlayListComponent)} />
                 <Route exact path='/recommendation' component={requireAuthentication(RecommendationComponent)} />
                 <Route exact path='/profile' component={requireAuthentication(ProfileComponent)} />
                 <Route exact path='/search' component={requireAuthentication(SearchComponent)} />
                 <Route component={NotFoundComponent} />       
                 </Switch>          

                 
               </div>

             </div>

             <MusicPlayerComponent />
            </div>
            </Switch>
           
           

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
