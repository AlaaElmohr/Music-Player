import React, { Component} from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import {addNewPlayList,updatePlayList} from '../../../actions';
import './ModalComponent.scss';
import { throws } from 'assert';
import AlbumHeaderComponent from '../albumHeaderComponent/AlbumHeaderComponent';
class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state={name:'',value:''}
    };

    handleUpdatePlayList=(e)=>{
     this.setState({value:e.target.value})
     this.props.updatePlayList(e.target.value,this.props.id,this.props.history);
    }

    closeModal=()=>{
        this.props.handleClose();
    }
    addPlayList=()=>{
        this.props.addNewPlayList(this.state.name,this.props.id,this.props.imageUrl,this.props.history);
    }
    handleName=(e)=>{
      this.setState({name:e.target.value})
    }
  
    handleOption=()=>{
        return this.props.playlist.map((playlist)=>{
          return <option value={playlist.name}>{playlist.name}</option>
        })
      }
     renderModal=()=>{
         if(this.props.type == 'playlist'){
             return(
                <Modal.Body>
                 <div className="modal-section b-b">
                    <div className="flex">
                        <i className="fa fa-plus-circle"></i>
                        <h6>Add to playlists</h6>
                    </div>
                    <div className="form-group m-t-30">
                    <label>Choose One</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={this.handleUpdatePlayList} value={this.state.value}>
                       <option></option>
                      {this.handleOption()}        
                    </select>
                  </div>
                 </div>
                 <div className="modal-section m-t-50">
                    <div className="flex">
                        <i className="fa fa-pencil"></i>
                        <h6>New Playlist</h6>                
                    </div>
                    <div className="flex m-t-30">
                        <input type="text" class="form-control"  onChange={this.handleName} placeholder="Enter Playlist Name" />
                        <div className="add" onClick={this.addPlayList}>
                        <i className="fa fa-plus-circle"></i>
                        </div>
                    </div>
                 </div>
              
                </Modal.Body>
             )
         }
         if(this.props.type == 'lyric' && this.props.lyrics){
            return (<Modal.Body>
                <div className="modal-section b-b">
                    <AlbumHeaderComponent image={this.props.image} title={this.props.song} singer={this.props.singer} type="lyric" />
                    <p>{this.props.lyrics.lyrics.lyrics_body}</p>
                </div>        
           </Modal.Body>)
        }
     }
     
    render(){
        return(
            <Modal show={this.props.show} onHide={this.closeModa} className="modal">
                {this.renderModal()}
                <Modal.Footer>
                    <button className="btn btn-success" onClick={this.closeModal}>Close</button>
                </Modal.Footer>
            </Modal>
           
        )
    }

}
function mapStateToProps({ playlist,lyrics}) {
    return { playlist,lyrics }
  }
export default connect(mapStateToProps, { addNewPlayList,updatePlayList })(withRouter(ModalComponent));