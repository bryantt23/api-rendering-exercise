import './App.css';
import WorkOrders from './components/WorkOrders';
import WorkerSearch from './components/WorkerSearch';
import React, { useState, useEffect } from 'react';

function App() {
  const workOrdersApi = 'https://api.hatchways.io/assessment/work_orders';
  const workWorkersApi = 'https://api.hatchways.io/assessment/workers/';

  const [workerSearch, setWorkerSearch] = useState('');
  const [workers, setWorkers] = useState({});
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    const res = await fetch(workOrdersApi);
    const data = await res.json();
    setOrders(data.orders);
  }

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    getWorkers();
  }, [orders]);

  // https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/
  // Iterates all users and returns their Github info.
  const fetchUserInfo = async () => {
    const requests = orders.map(async order => {
      const url = workWorkersApi + order.workerId;
      const data = await fetch(url);
      const res = await data.json();
      return res;
    });
    return Promise.all(requests); // Waiting for all the requests to get resolved.
  };

  async function getWorkers() {
    let workerMap = {};
    const info = await fetchUserInfo();

    // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
    for await (const data of info) {
      let { worker } = data;
      workerMap[worker.id] = worker;
    }

    setWorkers(workerMap);
  }

  useEffect(() => {
    console.log(workerSearch);
  }, [workerSearch]);

  return (
    <div className='App'>
      <WorkerSearch setWorkerSearch={setWorkerSearch} />
      <WorkOrders
        workerSearch={workerSearch}
        orders={orders}
        workers={workers}
      />
    </div>
  );
}

export default App;
