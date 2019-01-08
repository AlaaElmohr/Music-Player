import React,{Component} from 'react';
import { fadeInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import './TableComponent.scss';
import RowComponent from '../rowComponent/RowComponent';
class TableComponent extends Component {
    constructor(props){
     super(props);
     this.rowNum=10000;
    }
    styles = {
        fadeInUp: {
          animation: 'x 3s',
          animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        },
      }
    componentWillMount(){
        
        if(this.props.row){
           this.rowNum=this.props.row;
        }
    }
    renderHeader=()=>{
        if(this.props.header == 'true'){
            return(
                <thead className="headerTable">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">song</th>
                        <th scope="col">album</th>
                        <th scope="col">time</th>
                        <th scope="col">play</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
            )
        }
    }
    renderRow=()=>{
        if(this.props.type == 'tracks' ){
            if(this.props.data){
                return this.props.data.map((item,index)=>{
                    if(this.rowNum >= index){
                        return (<RowComponent id={item.id} song={item.name} album={item.album.name} singer={item.artists[0].name} image={item.album.images[0].url} time={item.duration_ms} type={this.props.type} key={index} audioTrack={item.preview_url} trackId={item.id}/>)                                           
                    }
                   
                })
            }
        }
        if(this.props.type == 'album' ){
            return this.props.data.map((item,index)=>{
                return (<RowComponent song={item.name} time={item.duration_ms} singer={item.artists[0].name} image={this.props.image} type={this.props.type} key={index}/>)                      
            })
          }
          if(this.props.type == 'playlist' ){
              if(this.props.data && this.props.tracks == "track" ){
                return this.props.data.map((item,index)=>{
                  if(this.rowNum >= index){
                   return (<RowComponent song={item.body.name} time={item.body.duration_ms} singer={item.body.artists[0].name} image={item.body.album.images[0].url} type={this.props.type} trackId={item.id} id={item.id} key={index} audioTrack={item.body.preview_url} />)                      
                  }
                })
            }
            if(this.props.data && this.props.tracks == "tracks" ){
                return this.props.data.map((item,index)=>{
                    let imageUrl;
                    if(this.props.image){
                        imageUrl=this.props.image
                    }else{
                         imageUrl=item.album.images[0].url
                    }
                    
                   return (<RowComponent song={item.name} time={item.duration_ms} singer={item.artists[0].name} image={imageUrl} type={this.props.type} audioTrack={item.preview_url} id={item.id} key={index} trackId={item.id}/>)                      
                })
            }
          }
    }
    render(){
        return(
            <StyleRoot>
                <table className="table" style={this.styles.fadeInUp}>
                    {this.renderHeader()} 
                
                    {this.renderRow()}
                </table>
            </StyleRoot>
        )
        }
}
export default TableComponent;
