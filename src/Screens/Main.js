import React from 'react';
import logo from '../assets/logo.png';
import SideBarItem from '../Components/SideBarItem';

import { secondaryLightColor } from '../constanst';

import { faUtensils, faCubes, faFileInvoiceDollar, faNewspaper } from '@fortawesome/free-solid-svg-icons'

class MainScreen extends React.Component{



  render(){
    return(
      <div>
        <div className="container-fluid" style={{background: secondaryLightColor}}>
          <div className="row">
            <div style={{height: '500px'}} className="col-sm-auto col-12">
              <div className="row mb-5 mx-auto">
                <img width='150px' src={logo} />
              </div>
              <SideBarItem icon={faNewspaper} label='NEWS' />
              <SideBarItem icon={faUtensils} label='ร้านอาหาร' selected={true} />
              <SideBarItem icon={faUtensils} label='ครัว' />
              <SideBarItem icon={faCubes} label='สโตว์' />
              <SideBarItem icon={faFileInvoiceDollar} label='บัญชี' />
            </div>
            <div style={{height: '500px'}} className="col-sm col-12">
              <h3>Hello</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainScreen;
