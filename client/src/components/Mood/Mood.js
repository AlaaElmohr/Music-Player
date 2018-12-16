import React from 'react';
import './Mood.scss';
import MoodCardComponent from '../built-in-components/moodCardComponent/MoodCardComponent';
const MoodComponent = (props) => {
  return(
      <div className="mood">
        <div className="section">
            <h1>Browse Mood  & Genres</h1>
            <div className="row m-t-30">
                <div className="col-md-3">
                  <MoodCardComponent genre="pop" image="mood-1.jpg"/>
                </div>
                <div className="col-md-3">
                  <MoodCardComponent genre="pop" image="mood-2.jpg" />
                </div>
                <div className="col-md-3">
                  <MoodCardComponent genre="pop" image="mood-3.jpg"/>
                </div>
                <div className="col-md-3">
                  <MoodCardComponent genre="pop" image="mood-4.png"/>
                </div>
          </div>
          <div className="row m-t-10">
                <div className="col-md-3">
                  <MoodCardComponent genre="pop" image="mood-1.jpg"/>
                </div>
                <div className="col-md-3">
                  <MoodCardComponent genre="pop" image="mood-2.jpg" />
                </div>
                <div className="col-md-3">
                  <MoodCardComponent genre="pop" image="mood-3.jpg"/>
                </div>
                <div className="col-md-3">
                  <MoodCardComponent genre="pop" image="mood-4.png"/>
                </div>
          </div>
          <div className="row m-t-10">
                <div className="col-md-3">
                    <MoodCardComponent genre="pop" image="mood-1.jpg"/>
                </div>
                <div className="col-md-3">
                    <MoodCardComponent genre="pop" image="mood-2.jpg" />
                </div>
                <div className="col-md-3">
                    <MoodCardComponent genre="pop" image="mood-3.jpg"/>
                </div>
                <div className="col-md-3">
                    <MoodCardComponent genre="pop" image="mood-4.png"/>
                </div>
            </div>
        </div>

      </div>
  )
}
export default MoodComponent;