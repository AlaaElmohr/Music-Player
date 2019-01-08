import React,{Component} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import {getTracks} from '../../actions';
import './PlayLists.scss';
import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';
import TableComponent from '../built-in-components/tableComponent/TableComponent';
import CardComponent from '../built-in-components/cardComponent/CardComponent';
class  PlayListsComponent extends Component {
  componentWillMount(){
    if(this.props.location.state === 'refresh'){
      window.location.reload();
      this.props.history.replace({pathname:'/playlists',state:''})     
    }
  }
  renderFavourite=()=>{
    console.log("next"+JSON.stringify(this.props.favourite))

    return (<TableComponent header="true" tracks="track" type="playlist" data={this.props.favourite}/>  )
  }
  renderPlaylists=()=>{
    if(this.props.playlist){
    return this.props.playlist.map((item,index)=>{
            return(
               <CardComponent image={item.imageUrl} song={item.name} singer={item.songs.length + 'item'} key={index} data={item.songs} tracks="track"/>
            )       
    })
  }
    
  }

  render(){
    return(
        <div className="playlists">
          <BackgroundComponent image="recommendation.jpg"   title="What is hot now?" title2="weekend groove playlist" height="650px" profile="false"/>
          <div className="section">
              <h5>Favourite</h5>
              {this.renderFavourite()}          
          </div>
          <div className="section">
            <h5>PlayLists</h5>
            <div className="flex card-list overflow">
              {this.renderPlaylists()}                       
            </div>
            </div>
        </div>
    )
  }
}
function mapStateToProps({ playlist,favourite}) {
  return { playlist,favourite }
}
export default connect(mapStateToProps,{getTracks})(withRouter(PlayListsComponent));
