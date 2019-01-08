import React, { Component} from 'react';
import { DropdownButton,MenuItem } from 'react-bootstrap';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import {addFavourite,getLyric,playAudio} from '../../../actions';

import './RowComponent.scss';
import ModalComponent from '../modalComponent/ModalComponent';
class RowComponent extends React.PureComponent{
  singer;
  state = {
    show: false,
    type:'',
    heartIcon:'fa fa-heart-o'
  };

  className="rowTable";
  convertToMinute=(ms)=>{
    const minute=ms/(60000)
   return( Math.floor(minute));
  }
  handleClose = ()=> {
    this.setState({ show: false });
  }
  addToFavourites=()=>{
    this.setState({heartIcon:'fa fa-heart'})
    this.props.addFavourite(this.props.id,this.props.history);
  
  }
  handlePlayAudio=()=>{
    this.props.playAudio(this.props.audioTrack,this.props.image,this.props.song,this.props.singer);
  }
  handleShowPlaylist=() => {
    this.setState({ type:'playlist',show: true });
  }
  handleShowLyric=() => {
    this.setState({ type:'lyric',show: true });
    if(!this.props.singer){
     this.singer=this.props.location.state.singer;
    }
    if(this.props.singer){
      this.singer=this.props.singer;
    }
    this.props.getLyric(this.props.song,this.singer);

  }
  renderImage=()=>{
    if(this.props.type == 'tracks'){
      return(
        <img src = {this.props.image} />
      )
    }
  }
  componentDidMount(){
    if(this.props.favourite){
      this.props.favourite.map((item)=>{
        if(item.id == this.props.trackId){

          this.setState({heartIcon:'fa fa-heart'})
        }
      })   
    }
   
  }
    renderRow=()=>{
     if(this.props.type=="playlist"){
         return(
          <tr className="rowTable">
            <td>
              <div className="flex">
                <img src = {this.props.image} />
                <i className={this.state.heartIcon}  onClick={this.addToFavourites}></i>                
              </div>
            </td>
            <td className="bold big text-white">{this.props.song}</td>
            <td className="text-white">{this.props.singer}</td>
            <td>{this.convertToMinute(this.props.time)+'.00'}</td>       
            <td><i className="fa fa-play-circle fa-2x" onClick={this.handlePlayAudio}></i></td>
            <td>
              <DropdownButton
                bsStyle='default'
                title=''
                id=''           
              >
                <MenuItem eventKey="1"  onClick={this.handleShowPlaylist}>Add To PlayList</MenuItem>
                <MenuItem eventKey="2" onClick={this.handleShowLyric}>Show Lyrics</MenuItem>
              </DropdownButton>
            </td>
          </tr>
         );
     }
     if(this.props.type=="tracks" || this.props.type=="album"){
      if(this.props.type=="tracks"){
         this.className="rowTable no-padding"
      }
        return(
          <tr className={this.className} >
            <td>
              <div className="flex">
                {this.renderImage()}
                <i className={this.state.heartIcon}  onClick={this.addToFavourites}></i>  
              </div>
            </td>
            <td className="bold big text-white">{this.props.song}</td>
            <td className="text-white">{this.props.album || this.props.singer}</td>
            <td>{this.convertToMinute(this.props.time)+'.00'}</td>
            
            <td><i className="fa fa-play-circle fa-2x" onClick={this.handlePlayAudio}></i></td>
            <td>
            <DropdownButton
              bsStyle='default'
              title=''
              id=''             
            >
              <MenuItem eventKey="1"  onClick={this.handleShowPlaylist}>Add To PlayList</MenuItem>
              <MenuItem eventKey="2" onClick={this.handleShowLyric}>Show Lyrics</MenuItem>
            </DropdownButton>
            </td>
          </tr>
        );
     }
    }
   render(){
    return(
       <tbody>
        {this.renderRow()}
        <ModalComponent show={this.state.show} handleClose={this.handleClose}  imageUrl={this.props.image} id={this.props.id} type={this.state.type} image={this.props.image} singer={this.singer} song={this.props.song}/>
       </tbody>
    )
   }
}
function mapStateToProps({ favourite }) {
  return { favourite }
}
export default connect(mapStateToProps,{addFavourite,getLyric,playAudio})(withRouter(RowComponent));
