import React,{Component} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { searchOnSpotify } from "../../../actions";

import './SearchBarComponent.scss';
class SearchBarComponent extends Component{
  
  state = {
    data:'',
    type:'artist',
    check:'artist'
  }

  handleSearch=(e)=>{
   this.setState({data:e.target.value});
  }
  handleType=(e)=>{
    this.setState({type:e.target.value,check:e.target.value});  
  }
  handleSubmit=()=>{
    this.props.searchOnSpotify(this.state.data,this.state.type,this.props.history);
  }
  render(){

    return(
        <div className="search-bar">  
              <input className="form-control form-control-lg" type="text" placeholder="Search..." onKeyUp={this.handleSearch}/>
              <form className="flex radio-group">
                <div className="flex ">
                  <input type='radio'  name='number' value='artist' onChange={this.handleType} checked={this.state.check == 'artist'}/>
                  <span>Artist</span>
                </div>
                <div className="flex">
                <input type='radio'  name='number' value='song' onChange={this.handleType} checked={this.state.check == 'song'}/>
                <span>Song</span>
              </div>
              </form> 
                <button className="btn btn-success" onClick={this.handleSubmit}>
                  <i className="fa fa-search"></i>
                </button>
             
             
        </div>
    )
  }
}
export default connect(null, {searchOnSpotify})(withRouter(SearchBarComponent));