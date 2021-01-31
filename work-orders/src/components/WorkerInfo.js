import React from 'react';

function WorkerInfo(props) {
  const { workerInfo } = props;
  if (!workerInfo) return 'No Info';

  return (
    <div>
      {/* WorkerInfo {JSON.stringify(workerInfo)} */}
      <img src={workerInfo.image} style={{ borderRadius: 1000, height: 150 }} />
      <p>Name: {workerInfo.name}</p>
      <p>Company Name: {workerInfo.companyName}</p>
      <p>Email: {workerInfo.email}</p>
    </div>
  );
}

export default WorkerInfo;
