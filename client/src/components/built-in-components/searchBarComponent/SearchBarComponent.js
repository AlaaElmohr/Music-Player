import React from 'react';

import './SearchBarComponent.scss';
const SearchBarComponent = (props) => {
  return(
      <div className="search-bar">  
            <input className="form-control form-control-lg" type="text" placeholder="Search..." />
            <i className="fa fa-search"></i>
      </div>
  )
}
export default SearchBarComponent;