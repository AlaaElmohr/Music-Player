import React, { Component} from 'react';
import './RowComponent.scss';
class RowComponent extends Component{
  className="rowTable";
  renderImage=()=>{
    if(this.props.type == 'tracks'){
      return(
        <img src = {require(`../../../assets/images/${this.props.image}`)} />
      )
    }
  }
    renderRow=()=>{
     if(this.props.type=="playlist"){
         return(
          <tr className="rowTable">
            <td>01</td>
            <td className="big">
              <div className="flex">
               <img src = {require(`../../../assets/images/${this.props.image}`)} />
               <div className="info">
                <p>{this.props.song}</p>
                <span>{this.props.singer}</span>
               </div>
              </div>
            </td>
            <td>{this.props.time}</td>
            <td><i className="fa fa-play-circle"></i></td>
            <td><i className="fa fa-ellipsis-h"></i></td>
          </tr>
         );
     }
     if(this.props.type=="tracks" || this.props.type=="album"){
      if(this.props.type=="tracks"){
         this.className="rowTable no-padding"
      }
        return(
          <tr className={this.className}>
            <td>
              <div className="flex">
              <p className="text-gray">01</p>
                {this.renderImage()}
                <i className="fa fa-heart"></i>
              </div>
            </td>
            <td className="bold text-white">{this.props.song}</td>
            <td className="text-white">{this.props.album}</td>
            <td>{this.props.time}</td>
            
            <td><i className="fa fa-play-circle fa-2x"></i></td>
            <td><i className="fa fa-ellipsis-h"></i></td>
          </tr>
        );
     }
    }
   render(){
    return(
       <tbody>
        {this.renderRow()}
       </tbody>
           
     
    )
   }
}
export default RowComponent;