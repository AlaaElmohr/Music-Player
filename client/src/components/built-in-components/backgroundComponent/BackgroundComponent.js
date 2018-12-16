import React,{Component} from 'react';
import IconComponent from '../iconComponent/IconComponent';
import './BackgroundComponent.scss';

class BackgroundComponent extends Component{
  bg=require(`../../../assets/images/${this.props.image}`)
  backgroundStyle = {
    height:`${this.props.height}`,
    backgroundImage: `url(${this.bg})`
  };
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
      <div className="flex m-t-30">
        <button className="btn btn-success m-r-30">play all</button>
        <IconComponent icon="share-alt" text="share" value="524"  />
      </div>
      </div>
     )
   } 
   if(this.props.profile == 'true'){
    return(
     <div className="profile-content">
       <div className="flex">
        <img src = {require(`../../../assets/images/${this.props.profileImage}`)} />
        <div className="info">
          <h1>
            {this.props.singer}
            <span>{this.props.genre}</span>
          </h1>
          <p>{this.props.info}</p>
          <div className="flex m-t-30">
            <button className="btn btn-success m-r-30">play all</button>
            <button className="btn btn-danger m-r-30">follow</button>
            <IconComponent icon="share-alt" text="share" value="524"  />
          </div>
        </div>
      </div>
  

    </div>
    )
  } 
  }
  render(){
    return(
        <div className="background-image" style={this.backgroundStyle}>
        <div className="overlay">
           {this.renderContent()}       
        </div>
        </div>
    )
  }
}
export default BackgroundComponent;
