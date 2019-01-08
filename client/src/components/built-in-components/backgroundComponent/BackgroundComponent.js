import React,{Component} from 'react';
import { connect } from "react-redux";
import { followArtist,unFollowArtist} from "../../../actions";
import IconComponent from '../iconComponent/IconComponent';
import './BackgroundComponent.scss';

class BackgroundComponent extends Component{
  state={text:'follow'};
  bg=require(`../../../assets/images/${this.props.image}`)
  backgroundStyle = {
    height:`${this.props.height}`,
    backgroundImage: `url(${this.bg})`
  };
    componentDidMount(){
      if(this.props.profile == 'true'){
      if(this.props.follow == ''){
        this.setState({text:'follow'})
        
      }
      if(this.props.follow != ''){
        this.setState({text:'unfollow'});
        
      }
    }
 
    
  }
  handleFollow=()=>{
    if(this.props.follow == ''){
    this.props.followArtist(this.props.id);
    this.setState({text:'unfollow'});
    }
    if(this.props.follow != ''){
      this.props.unFollowArtist(this.props.id);
      this.setState({text:'follow'});
    }
  }
  renderContent=()=>{
   if(this.props.profile == 'false'){
     return(
      <div className="content">
      <h1>
      <span>{this.props.span}</span>
      {this.props.title}
      <br />
      {this.props.title2}
      </h1>
     
      </div>
     )
   } 
   if(this.props.profile == 'true'){
    return(
     <div className="profile-content">
       <div className="flex">
        <img src = {this.props.profileImage} />
        <div className="info">
          <h1>
            {this.props.singer}
            <span>{this.props.genre}</span>
          </h1>
          <p>{this.props.info}</p>
          <div className="flex m-t-30">
            <button className="btn btn-danger m-r-30" onClick={this.handleFollow}>{this.state.text}</button>
          </div>

        </div>
      </div>
  

    </div>
    )
  } 
  }
  render(){
    return(
      <div className="background-component">
      <div className="background-image" style={this.backgroundStyle}>
      <div className="overlay">
         {this.renderContent()}       
      </div>
      </div>
      </div>
       
    )
  }
}
function mapStateToProps({follow}) {
  return { follow }
}
export default connect(mapStateToProps,{ followArtist, unFollowArtist })(BackgroundComponent);