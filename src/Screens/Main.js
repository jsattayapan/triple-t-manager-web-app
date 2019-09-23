import React from 'react';
import { secondaryLightColor, primaryLightColor } from '../constanst';
import SideBarMenu from '../Sections/SideBarMenu';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import RestaurantMain from '../Sections/RestaurantMain';

class MainScreen extends React.Component{
  render(){
    return(
      <div>
        <div className="container-fluid" style={{background: primaryLightColor}}>
          <div className="row">
            <SideBarMenu />
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default MainScreen;
