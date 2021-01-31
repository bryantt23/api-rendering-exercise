import React from 'react';
import './WorkerInfo.css';

function WorkerInfo(props) {
  const { workerInfo } = props;
  if (!workerInfo) return 'No Info';

  return (
    <div className='row'>
      <div className='left'>
        <img src={workerInfo.image} alt='worker' />
      </div>
      <div className='right'>
        <h4>Name: {workerInfo.name}</h4>
        <p>Company Name: {workerInfo.companyName}</p>
        <p>Email: {workerInfo.email}</p>
      </div>
    </div>
  );
}

export default WorkerInfo;
