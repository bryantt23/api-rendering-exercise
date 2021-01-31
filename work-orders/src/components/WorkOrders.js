import React from 'react';
import WorkOrder from './WorkOrder';

function WorkOrders({ orders, workers }) {
  return (
    <div>
      {orders.length === 0 ? (
        'No orders'
      ) : (
        <div className='container'>
          {orders.map(order => {
            return (
              <WorkOrder
                key={order.id}
                order={order}
                workers={workers}
                class='row'
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default WorkOrders;
