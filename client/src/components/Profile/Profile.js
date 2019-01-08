import React, { Component } from 'react';
import { connect } from "react-redux";
import './Profile.scss';
import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';
import TableComponent from '../built-in-components/tableComponent/TableComponent';
import AlbumHeaderComponent from '../built-in-components/albumHeaderComponent/AlbumHeaderComponent';
import FullCardComponent from '../built-in-components/fullCardComponent/FullCardComponent';

class ProfileComponent extends Component{
  
  renderBackground=()=>{
    return this.props.profile.map((item,index)=>{
      if(index==0){
        return  <BackgroundComponent image="profile-cover.jpg" id={item.id} singer={item.name} genre={item.genres} profileImage={item.images[0].url} info="Astrid Smeplass is a Norwegian singer, songwriter and model. In 2013, she had her breakthrough when she placed fifth in the Norwegian version of Pop Idol called Idol - Jakten på en superstjerne she placed fifth in the Norwegian version she placed fifth in the Norwegian version she placed fifth in the Norwegian version" height="650px" profile="true"/>

      }
    })

  }
  renderAlbums=()=>{
    return this.props.profile.map((data,index)=>{
      if(index==2){
        return data.albums[0].items.map((item,index)=>{
          return(
              <div className="col-md-6">
                <AlbumHeaderComponent image={item.images[0].url} title={item.name} />
                <TableComponent header="true" type="album" data={data.tracks[index].body.items} image={item.images[0].url}/>
              </div>
          );
        })
      }
    })
  }
  renderArtists=()=>{
    return this.props.profile.map((data,index)=>{
      if(index == 1){
        return data.map((item,index)=>{
            let itemImage='';
            if(item.images[0] == undefined){
              itemImage="https://i.scdn.co/image/652b6bb0dfaf8aa444f4414ee018699260e74306";
            }
            else{
              itemImage=item.images[0].url
            }
            return(
               <FullCardComponent image={itemImage} genre={item.genres[0]} singer={item.name} key={index} />            
            )
        
        }) 
      }
    })
  }
  renderTopTracks=()=>{
    return this.props.profile.map((data,index)=>{
      if(index == 3){
        return(
          <TableComponent header="true" type="tracks" data={data.tracks} />
        )
      }
    })
  }
  render(){
    return(
        <div className="profile">
          {this.renderBackground()}
          <div className="section ">
            <h5>Top Tracks</h5>
            {this.renderTopTracks()}
          </div>
          <div className="row section">
          {this.renderAlbums()}
          </div>
          <div className="section">
          <h5>Related Artists</h5>
          <div className="flex card-list overflow">
            {this.renderArtists()}
          </div>
        </div>
        </div>
    )
  }
}
function mapStateToProps({profile}) {
  return { profile }
}
export default connect(mapStateToProps)(ProfileComponent);
