import React from 'react';
import CustomerForm from './CustomerForm';

const CustomerEditPage = props => {
  console.log(props);
  return (
    <div>
      <p>Edit page: {props.match.params.id}</p>
      <CustomerForm />
    </div>
  );
};

export default CustomerEditPage;
