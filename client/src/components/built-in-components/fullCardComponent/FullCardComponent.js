import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { fadeInLeft,pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { getProfile,isFollow } from "../../../actions";
import './FullCardComponent.scss';

class FullCardComponent extends Component{
  styles = {
    fadeInLeft: {
      animation: 'x 3s',
      animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    pulse: {
      animation: 'x 3s',
      animationName: Radium.keyframes(pulse, 'pulse')
    },
  }
  state={hover:this.styles.fadeInLeft}  
  backgroundImage={
    backgroundImage: `url(${this.props.image})`
  }

  handleProfile=()=>{
    this.props.getProfile(this.props.id,this.props.history);
    this.props.isFollow(this.props.id);
  }
  handleEnter=()=>{
    console.log("hello")
    this.setState({hover:this.styles.pulse})
  }
 
  render(){
    return(
      <StyleRoot>
        <div className="full-card" style={[this.state.hover,this.backgroundImage]} onMouseEnter={this.handleEnter} onClick={this.handleProfile}>
              <div className="card-content">
              <h5>{this.props.singer}</h5>
              <span>{this.props.genre}</span>
              </div>
        </div>
      </StyleRoot>
    )
  }  
}
export default connect(null,{getProfile , isFollow})(withRouter(FullCardComponent));