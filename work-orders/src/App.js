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
    // console.log(res.json());
    // console.log(JSON.stringify(data));
    // setOrders(JSON.stringify(data));
    console.log(typeof data.orders);
    console.log(data.orders);
    setOrders(data.orders);
  }

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    getWorkers();
  }, [orders]);

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
      console.log('data', data);
      let { worker } = data;
      console.log(worker);
      workerMap[worker.id] = worker;
      console.log(workerMap);
    }

    // console.log('workerMap', workerMap);
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
