import React from 'react';
import WorkOrder from './WorkOrder';

function WorkOrders({ orders, workers }) {
  return (
    <div>
      {orders.length === 0 ? (
        'No orders'
      ) : (
        <div>
          {orders.map(order => {
            console.log(order);
            return <WorkOrder key={order.id} order={order} workers={workers} />;
          })}
        </div>
      )}
    </div>
  );
}

export default WorkOrders;
