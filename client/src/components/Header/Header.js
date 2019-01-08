import React,{Component} from 'react';
import { NavLink } from 'react-router-dom'

import './Header.scss';
import SearchBarComponent from '../built-in-components/searchBarComponent/SearchBarComponent';

class HeaderComponent extends Component{
  constructor(){
    super();
    this.className="header";
    this.state={className:this.className};
    
  }
  handleScroll= ()=>{
      if(window.pageYOffset < 60 ){
        this.className="header";
        this.setState({className:this.className});
      }
      if(window.pageYOffset > 60 ){
        this.className="header bg";
        this.setState({className:this.className});
      }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
   }
   render(){
    return(
      <div className={this.state.className}>
        <div className="item-list">
          <NavLink  exact to="/" className="item" activeClassName="active">home</NavLink>
          <NavLink  exact to="/recommendation" className="item" activeClassName="active">recommended</NavLink>
          <NavLink  exact to="/playlists" className="item" activeClassName="active">playlists</NavLink>
          
          <SearchBarComponent location={this.props.location} />
        </div>
       </div>
       
        )
   }
  
}
export default HeaderComponent;