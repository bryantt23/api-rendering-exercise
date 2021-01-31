import React from 'react';
import WorkerInfo from './WorkerInfo';

function WorkOrder(props) {
  const { order, worker } = props;
  const dt = new Date(order.deadline);

  //   https://stackoverflow.com/questions/1056728/where-can-i-find-documentation-on-formatting-a-date-in-javascript
  const dateDisplay = `${(dt.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${dt
    .getDate()
    .toString()
    .padStart(2, '0')}/${dt
    .getFullYear()
    .toString()
    .padStart(4, '0')} ${dt
    .getHours()
    .toString()
    .padStart(2, '0')}:${dt
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;

  return (
    <div className='work-order'>
      <h2>{order.name}</h2>

      <h3>Work Description: {order.description}</h3>

      <WorkerInfo workerInfo={worker} />

      <p className='due-date'>Due Date: {dateDisplay}</p>
    </div>
  );
}

export default WorkOrder;
