import React from 'react';

const SummaryBox = (props) => {
  return(
    <div className="col-3">
      <div className="col-12 my-3 shadow rounded" style={{
        backgroundImage: props.backgroundColor,
        height: '230px',
      }}>
          {props.children}
        </div>
      </div>
  )
}

export default SummaryBox;
