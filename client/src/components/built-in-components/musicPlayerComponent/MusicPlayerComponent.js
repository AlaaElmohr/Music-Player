import React,{Component} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import './MusicPlayerComponent.scss';
class MusicPlayerComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={audio:'',display:'flex'}

  }
  componentWillReceiveProps(nextProps){
   if(nextProps.audioTrack[0] != this.props.audioTrack[0]){
    if(nextProps.audioTrack[0]){
      let audio=document.getElementById('audioTrack');
      let source = document.getElementById('audioSource');
      source.src = nextProps.audioTrack[0];
      this.setState({audio:source.src})
      audio.load(); 
      audio.play();
   }
   }
  }
  handlePlaySound=()=>{
    let audio=document.getElementById('audioTrack');
    let source = document.getElementById('audioSource');
    source.src = this.state.audio;
    audio.load(); 
    audio.play();
}
  handlePauseSound=()=>{
      document.getElementById('audioTrack').pause();
  }
  handleIncreaseSound=()=>{
    const volume=document.getElementById('audioTrack').volume;
    if(volume !=0 || volume != 1){
    document.getElementById('audioTrack').volume=volume+0.1;
    }
}
handleDecreaseSound=()=>{
  const volume=document.getElementById('audioTrack').volume;
  if(volume !=0 || volume != 1){
  document.getElementById('audioTrack').volume=volume-0.1;
  }
}
  handleStopSound=()=>{
    document.getElementById('audioTrack').volume=0;
}
renderAudioInfo=()=>{
  if(this.props.audioTrack[1]){
    return(
      <div className="audio-info">
              <img src={this.props.audioTrack[1]} />
              <div className="audio-content">
                <h6>{this.props.audioTrack[2]}</h6>
              </div>
      </div>
    )
  }
}
  render(){
    return(
        <div className="music-player">
        <audio id="audioTrack" className="none">
              <source id="audioSource" src="" type="audio/mpeg" >
              </source>
        </audio>
          
            {this.renderAudioInfo()}
            <div className="flex">
            <div className="audio-controller">
              <i className="fa fa-volume-up fa-1x" onClick={this.handleIncreaseSound}/>
              <i className="fa fa-play-circle fa-2x" onClick={this.handlePlaySound}/>
              <i className="fa fa-pause-circle fa-2x" onClick={this.handlePauseSound}/>
              <i className="fa fa-volume-down fa-1x" onClick={this.handleDecreaseSound}/>
            </div>
            <div className="volume">
            <i className="fa fa-volume-off fa-1x" onClick={this.handleStopSound}/>
            </div>
          </div>
          
        </div>
    )
  }
}
function mapStateToProps({ audioTrack}) {
  return { audioTrack }
}
export default connect(mapStateToProps)(withRouter(MusicPlayerComponent));

