import React, { Component } from 'react';
import { connect } from "react-redux";
import './Recommendation.scss';
import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';
import TableComponent from '../built-in-components/tableComponent/TableComponent';
class RecommendationComponent extends Component {
  render(){
    return(
        <div className="profile">
          <BackgroundComponent image="recommendation.jpg" title="What is hot now?" title2="weekend groove playlist" height="650px"  profile="false" />
          <div className="section">
              <h5>Top Tracks</h5>
              <TableComponent header="true" type="tracks" data={this.props.recommendations} />
              
          </div>
        </div>
    )
  }
}
function mapStateToProps({recommendations}) {
  return { recommendations }
}
export default connect(mapStateToProps)(RecommendationComponent);

