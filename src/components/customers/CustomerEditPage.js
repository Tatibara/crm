import React from 'react';
import { connect } from 'react-redux';
import CustomerForm from './CustomerForm';
import { addCustomer } from '../../actions/customers';

const CustomerEditPage = props => {
  const onSubmit = customer => {
    props.dispatch(addCustomer(customer));
    props.history.push('/crm');
  };

  return (
    <div>
      <p>Edit page: {props.match.params.id}</p>
      <CustomerForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect()(CustomerEditPage);
