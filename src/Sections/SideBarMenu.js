import React from 'react';
import logo from '../assets/logo.png';
import SideBarItem from '../Components/SideBarItem';
import { secondaryLightColor, primaryLightColor } from '../constanst';
import { faUtensils, faCubes, faFileInvoiceDollar, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const SideBarMenu = () => {
  return (<div style={{ background: secondaryLightColor, width: '200px'}} className="col-sm-auto col-12">
    <div className="row mt-5 mb-5 mx-auto">
      <div className="col-12 text-center">
        <img width='130px' src={logo} />
      </div>
    </div>
    <SideBarItem icon={faNewspaper} label='NEWS' />
    <SideBarItem icon={faUtensils} label='ร้านอาหาร' selected={true} />
    <SideBarItem icon={faUtensils} label='ครัว' />
    <SideBarItem icon={faCubes} label='สโตว์' />
    <SideBarItem icon={faFileInvoiceDollar} label='บัญชี' />
    <div className="row mt-5 mb-5">
      <div className="col-12 text-center">
        <p>Account:<br /> Jetawat Sattayapan</p>
        <button className="btn btn-link">Sign out</button>
      </div>
    </div>
  </div>)
}

export default SideBarMenu;
