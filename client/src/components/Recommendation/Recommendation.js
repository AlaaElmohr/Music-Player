import React from 'react';
import './Recommendation.scss';
import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';
import TableComponent from '../built-in-components/tableComponent/TableComponent';
const RecommendationComponent = (props) => {
  return(
      <div className="profile">
        <BackgroundComponent image="recommendation.jpg" title="What is hot now?" title2="weekend groove playlist" height="650px"  profile="false" />
        <div className="section">
            <h5>Top Tracks</h5>
            <TableComponent header="true" type="tracks" />


        
        </div>
      </div>
  )
}
export default RecommendationComponent;