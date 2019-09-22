import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { primaryColor } from '../constanst';

const SideBarItem = (props) => {
  var style = {
    height: '60px',
    fontSize: '1.3rem'
  }
  if(props.selected){
    style.borderLeft = `4px solid ${primaryColor}`;
  }else{
    style.paddingLeft = '4px';
  }
  return(
    <div className="row sideBarItem" style={style}>
      <div className="col-12 my-auto">
        <span>
          <FontAwesomeIcon icon={props.icon} style={{fontSize: '1.8rem', marginRight: '10px'}} size="lg" />
          {props.label}
         </span>
      </div>
    </div>
  )
}

export default SideBarItem;
