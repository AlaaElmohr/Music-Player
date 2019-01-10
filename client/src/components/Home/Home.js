import React,{Component} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import queryString from "query-string";
import {getAlbumTracks} from '../../actions';
import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';
import './Home.scss';
import CardComponent from '../built-in-components/cardComponent/CardComponent';
import FullCardComponent from '../built-in-components/fullCardComponent/FullCardComponent';
import TableComponent from '../built-in-components/tableComponent/TableComponent';

class HomeComponent extends Component {
  componentWillMount() {
     if(!localStorage.getItem('token')){
     const  query = this.props.location;
     const token=query.search.replace('?token=','');
     if (token) {
        localStorage.setItem('token',token);
       }
      else{
        this.props.history.push('/login')
      }
    }
  
  }
 
  renderNewRelease=()=>{
    const renderSection=()=>{
      return this.props.newRelease.items.map((item,index)=>{
        const data={id:item.id,image:item.images[0].url};
         return <CardComponent image={item.images[0].url} song={item.name} singer={item.artists[0].name} key={index} tracks="tracks" data={data}/>
        })
    }
    if(this.props.newRelease){
      return(
        <div className="section">
          <h5>New Releases for you</h5>
          <div className="flex card-list overflow">
           {renderSection()}
          </div>
        </div>
      )
      
    }
  
    
  }
  renderArtists=()=>{
    const renderSection=()=>{
      return this.props.artists.artists.map((item,index)=>{
        return (<FullCardComponent image={item.images[0].url} genre={item.genres[0]} singer={item.name} key={index} id={item.id} />)
      })
    }
    if(this.props.artists){
      return (
        <div className="section">
          <h5>Popular Artists You May Like</h5>
          <div className="flex card-list overflow">
            {renderSection()}
          </div>
        </div>
      )
    }
  }
  renderFavourite=()=>{
    if(this.props.favourite.length>0){
      return (
        <div className="col-md-6">
          <h5>Favourite PlayList</h5>
            <TableComponent header="true" tracks="track" type="playlist" data={this.props.favourite} row="10" />
        </div>
      )
    }
  }
  renderRecommended=()=>{
    if(this.props.recommendations.length>0){
      return (
        
        <div className="col-md-6">
          <h5>Recommendations</h5>
            <TableComponent header="true" tracks="tracks" type="playlist" data={this.props.recommendations} row="10" />
        </div>
      )
    }
  }
  render(){
    return(
        <div className="home">
        <BackgroundComponent title="What is hot now?" title2="weekend groove playlist" height="650px" image="home.jpg" profile="false" />

             {this.renderNewRelease()}

            {this.renderArtists()}
          <div className="section">
            <div className="row">
                {this.renderFavourite()}
                {this.renderRecommended()}

            </div>
            </div>
            
          </div>
    )
  }
}
function mapStateToProps({ newRelease,artists,favourite,recommendations}) {
  return { newRelease,artists,favourite,recommendations }
}
export default connect(mapStateToProps,{getAlbumTracks})(withRouter(HomeComponent));

//                <TableComponent header="false" type="playlist" />
