import './App.css';
import WorkOrders from './components/WorkOrders';
import WorkerSearch from './components/WorkerSearch';
import React, { useState, useEffect } from 'react';

function App() {
  const [workerSearch, setWorkerSearch] = useState('');
  const [workers, setWorkers] = useState({});

  useEffect(() => {
    console.log(workerSearch);
  }, [workerSearch]);

  return (
    <div className='App'>
      <WorkerSearch setWorkerSearch={setWorkerSearch} />
      <WorkOrders workerSearch={workerSearch} setWorkers={setWorkers} />
    </div>
  );
}

export default App;
