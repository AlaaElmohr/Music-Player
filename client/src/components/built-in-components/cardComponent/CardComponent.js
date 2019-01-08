import React,{Component} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fadeInRight,pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {getTracks,getAlbumTracks} from '../../../actions';
import './CardComponent.scss';
class CardComponent extends  Component{
  styles = {
    fadeInRight: {
      animation: 'x 3s',
      animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
    },
    pulse: {
      animation: 'x 3s',
      animationName: Radium.keyframes(pulse, 'pulse')
    },
  }
  state={hover:this.styles.fadeInRight}

  getTracks=()=>{
    if(this.props.tracks == 'track'){
      this.props.getTracks(this.props.data,this.props.history);
    }
    if(this.props.tracks == 'tracks'){
      this.props.getAlbumTracks(this.props.data.id,this.props.data.image,this.props.history);
    }

  }
  handleEnter=()=>{
    this.setState({hover:this.styles.pulse})
  }
 
  render(){
    return(
      <StyleRoot>
        <div className="card" onClick={this.getTracks} onMouseEnter={this.handleEnter}  style={this.state.hover}>
            <div className="card-image">
            <img src={this.props.image} />
            </div>
            <div className="card-content">
              <p>{this.props.song}</p>
              <span>{this.props.singer}</span>
            </div>
        </div>
      </StyleRoot>
    )
  }
}

export default connect(null,{getTracks,getAlbumTracks})(withRouter(CardComponent));
