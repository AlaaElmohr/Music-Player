import React from 'react';
import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';

import './Home.scss';

const HomeComponent = () => {
  return(
      <div className="home">
      <BackgroundComponent title="What is hot now?" title2="weekend groove playlist" height="600px" image="home.jpg"/>

      </div>
  )
}
export default HomeComponent;