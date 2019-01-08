import React, { Component } from 'react';
import { connect } from "react-redux";

import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';
import './Search.scss';
import CardComponent from '../built-in-components/cardComponent/CardComponent';
import FullCardComponent from '../built-in-components/fullCardComponent/FullCardComponent';

import TableComponent from '../built-in-components/tableComponent/TableComponent';

class SearchComponent extends Component {
  state={
    data:''
  }
   settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  renderAlbums=()=>{
    return this.props.search.map((data,index)=>{
      if(index == 0){
        return data.map((item,index)=>{
            console.log("item"+JSON.stringify(item))
            data={id:item.album.id,image:item.album.images[0].url};
            return(
                
               <CardComponent image={item.album.images[0].url} song={item.album.name} singer={item.artists[0].name} key={index} data={data} tracks="tracks"/>
            )
        }) 
      }

    })
    
  }
  renderPlaylists=()=>{
    return this.props.search.map((data,index)=>{
      if(index == 1){
        return data.map((item,index)=>{
          //console.log("index"+JSON.stringify(item))
            return(
               <CardComponent image={item.images[0].url} song={item.name} singer={item.tracks.total + 'item'} key={index}/>
            )
          
        }) 
      }

    })
    
  }
  renderTable=()=>{
    return this.props.search.map((data,index)=>{
      if(index == 0){
        return (<TableComponent header="true" type="tracks" data={data} singer={this.props.location.state.singer}/>)  
      }
    });
    
  }
  renderArtists=()=>{
    const renderArtistsList=()=>{
      return this.props.search.map((data,index)=>{
        if(index == 2){
          return data.map((item,index)=>{
              let itemImage='';
              if(item.images[0] == undefined){
                itemImage="https://www.computerhope.com/issues/pictures/itunes-logo.jpg";
              }
              else{
                itemImage=item.images[0].url
              }
              return(
                 <FullCardComponent image={itemImage} genre={item.genres[0]} singer={item.name} key={index} id={item.id} />                
              )
          
          }) 
        }
      })
    }
    if(this.props.location.state.type == 'artist'){
      return(
        <div className="section">
          <h5>Artists</h5>
          <div className="flex card-list overflow">
            {renderArtistsList()}
          </div>
        </div>
      )
    }
  }
  renderSearch=()=>{
    console.log("sea"+this.props.search)
  }
  render(){
    return(
        <div className="search">
        <BackgroundComponent title="What is hot now?" title2="weekend groove playlist" height="650px" image="home.jpg" profile="false" />
        {this.renderSearch()}
        <div className="section">
          {this.renderTable()}      
        </div>
        <div className="section">
          <h5>Albums</h5>
          <div className="flex card-list overflow">
              {this.renderAlbums()}
          </div>
        </div>
         {this.renderArtists()}



        </div>
    )
  }
}
function mapStateToProps({search}) {
  return { search }
}
export default connect(mapStateToProps)(SearchComponent);
/***
         <div className="section">
         <h5>PlayLists</h5>
         
         <div className="flex card-list overflow">
          {this.renderPlaylists()}                       
         </div>
       </div>            
 */