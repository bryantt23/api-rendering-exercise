import React from 'react';

function WorkOrder(props) {
  const { order } = props;
  console.log(props);
  return <div>{order.name}</div>;
}

export default WorkOrder;
