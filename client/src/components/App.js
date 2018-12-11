import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import LoginComponent from './login/Login';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/login" component={LoginComponent} />
           
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
