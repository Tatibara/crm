import React from 'react';

const CustomerEditPage = props => {
  console.log(props);
  return (
    <div>
      <p>Edit page: {props.match.params.id}</p>
    </div>
  );
};

export default CustomerEditPage;
