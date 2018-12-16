import React from 'react';
import './PlayList.scss';
import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';
import TableComponent from '../built-in-components/tableComponent/TableComponent';
import AlbumHeaderComponent from '../built-in-components/albumHeaderComponent/AlbumHeaderComponent';
const PlayListComponent = (props) => {
  return(
      <div className="profile">
        <BackgroundComponent image="recommendation.jpg"  title="What is hot now?" title2="weekend groove playlist" height="650px" profile="false"/>
        <div className="section">
            <h5>Favourite</h5>
            <TableComponent header="true" type="tracks" />
        </div>
        <div className="row section">
          <div className="col-md-6">
            <AlbumHeaderComponent image="album-1.jpg" title="Hurt so good"/>
            <TableComponent header="true" type="tracks" />
          </div>
          <div className="col-md-6">
            <AlbumHeaderComponent image="album-2.jpg" title="Breath"/>
            <TableComponent header="true" type="tracks" />
          </div>
        </div>
      </div>
  )
}
export default PlayListComponent;