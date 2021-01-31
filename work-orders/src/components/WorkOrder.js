import React from 'react';

function WorkOrder(props) {
  const { order } = props;
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
  console.log(props);
  return (
    <div>
      <h1>{order.name}</h1>

      <h3>User Info</h3>

      <p>Due Date: {dateDisplay}</p>
    </div>
  );
}

export default WorkOrder;
