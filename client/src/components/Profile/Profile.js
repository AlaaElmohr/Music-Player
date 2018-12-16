import React from 'react';
import './Profile.scss';
import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';
import TableComponent from '../built-in-components/tableComponent/TableComponent';
import AlbumHeaderComponent from '../built-in-components/albumHeaderComponent/AlbumHeaderComponent';
const ProfileComponent = (props) => {
  return(
      <div className="profile">
        <BackgroundComponent image="profile-cover.jpg" singer="Astrid S" genre="Pop, Rock ,Roll" profileImage="profile.jpg" info="Astrid Smeplass is a Norwegian singer, songwriter and model. In 2013, she had her breakthrough when she placed fifth in the Norwegian version of Pop Idol called Idol - Jakten på en superstjerne she placed fifth in the Norwegian version she placed fifth in the Norwegian version she placed fifth in the Norwegian version" height="650px" profile="true"/>
        <div className="section">
            <h5>Top Tracks</h5>
            <TableComponent header="true" type="tracks" />
        </div>
        <div className="row section">
          <div className="col-md-6">
            <AlbumHeaderComponent image="album-1.jpg" title="Hurt so good"/>
            <TableComponent header="true" type="album" />
          </div>
          <div className="col-md-6">
            <AlbumHeaderComponent image="album-2.jpg" title="Breath"/>
            <TableComponent header="true" type="album" />
          </div>
        </div>
      </div>
  )
}
export default ProfileComponent;