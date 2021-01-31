import React from 'react';

function WorkerSearch({ setWorkerSearch }) {
  return (
    <div>
      <input id='name-input' onChange={e => setWorkerSearch(e.target.value)} />
    </div>
  );
}

export default WorkerSearch;
