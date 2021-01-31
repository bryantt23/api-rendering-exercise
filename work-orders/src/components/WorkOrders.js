import React, { useState, useEffect } from 'react';

function WorkOrders() {
  const workOrdersApi = 'https://api.hatchways.io/assessment/work_orders';
  const workWorkersApi = 'https://api.hatchways.io/assessment/workers/';

  const [orders, setOrders] = useState([]);

  function getWorkers() {
    console.log(orders);
  }

  async function getOrders() {
    const res = await fetch(workOrdersApi);
    const data = await res.json();
    // console.log(res.json());
    // console.log(JSON.stringify(data));
    // setOrders(JSON.stringify(data));
    console.log(data);
    setOrders(data.orders);
  }

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    getWorkers();
  }, [orders]);

  return (
    <div>
      {orders.length === 0
        ? 'No orders'
        : orders.map(order => {
            return (
              <p>
                {order.name} {JSON.stringify(order)}
              </p>
            );
          })}
    </div>
  );
}

export default WorkOrders;
