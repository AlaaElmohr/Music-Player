import React from 'react';
import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';

import './Search.scss';
import CardComponent from '../built-in-components/cardComponent/CardComponent';
import FullCardComponent from '../built-in-components/fullCardComponent/FullCardComponent';

import TableComponent from '../built-in-components/tableComponent/TableComponent';

const SearchComponent = () => {
  return(
      <div className="search">
       <BackgroundComponent title="What is hot now?" title2="weekend groove playlist" height="650px" image="home.jpg" profile="false" />
       <div className="section">
            <TableComponent header="true" type="tracks" />        
      </div>
        <div className="section">
          <h5>Albums</h5>
          <div className="flex card-list">
            <CardComponent image="card.jpg" song="Lemonada" singer="Beyonce" />
            <CardComponent image="card-1.jpg" song="Lemonada" singer="Beyonce" />
            <CardComponent image="card-2.jpg" song="Lemonada" singer="Beyonce" />
            <CardComponent image="card-3.jpg" song="Lemonada" singer="Beyonce" />
            <CardComponent image="card-4.jpg" song="Lemonada" singer="Beyonce" />
            <CardComponent image="card-5.jpg" song="Lemonada" singer="Beyonce" />
          </div>
        </div>
        <div className="section">
        <h5>Artists</h5>
        <div className="flex card-list">
          <FullCardComponent image="singer-1.jpg"   genre="Pop" singer="Adele" />
          <FullCardComponent image="singer-2.jpg" genre="Rock" singer="Madona" />
          <FullCardComponent image="card-5.jpg" genre="Classic" singer="Shakira" />
          <FullCardComponent image="singer-4.jpg" genre="Pop" singer="Adele" />
          <FullCardComponent image="singer-5.jpg" genre="Pop" singer="Adele" />
          <FullCardComponent image="singer-6.jpg" genre="Pop" singer="Adele" />
        </div>
      </div>

      </div>
  )
}
export default SearchComponent;