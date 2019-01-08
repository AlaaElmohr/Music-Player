import React,{Component} from 'react';
import { connect } from "react-redux";

import './PlayList.scss';
import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';
import TableComponent from '../built-in-components/tableComponent/TableComponent';
class  PlayListComponent extends Component {

  renderPlaylist=()=>{
    if(this.props.location.search === '?track'){
      console.log('this'+this.props.tracks.tracks);
      return (<TableComponent header="true" type="playlist" tracks="tracks" data={this.props.tracks.tracks}/>  )
    }
    if(this.props.location.search === '?tracks'){
      console.log("loka"+this.props.tracksAlbum.items)
      return (<TableComponent header="true" type="playlist" tracks="tracks" data={this.props.tracksAlbum.items}  image={this.props.location.state.image}/>  )
    }
   }
  render(){
    return(
        <div className="profile">
          <BackgroundComponent image="recommendation.jpg"  title="What is hot now?" title2="weekend groove playlist" height="650px" profile="false"/>
          <div className="section">
           {this.renderPlaylist()}
          </div>
          
        </div>
    )
  }
}
function mapStateToProps({ tracks,tracksAlbum }) {
  return { tracks,tracksAlbum }
}
export default connect(mapStateToProps)(PlayListComponent);
/*
  <div className="profile">
          <BackgroundComponent image="recommendation.jpg"  title="What is hot now?" title2="weekend groove playlist" height="650px" profile="false"/>
          <div className="section">
              <h5>Favourite</h5>
              <TableComponent header="true" type="playlist" data={this.props.favourite}/>
              
          </div>
          <div className="row section">
            <div className="col-md-6">
              <AlbumHeaderComponent image="album-1.jpg" title="Hurt so good"/>
              <TableComponent header="true" type="playlist" />
            </div>
            <div className="col-md-6">
              <AlbumHeaderComponent image="album-2.jpg" title="Breath"/>
              <TableComponent header="true" type="playlist" />
            </div>
          </div>
        </div>*/