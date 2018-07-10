import React from 'react';
import { connect } from 'react-redux';
import CustomerForm from './CustomerForm';
import { addCustomer } from '../../actions/customers';

const CustomerAddPage = props => {
  const onSubmit = customer => {
    props.dispatch(addCustomer(customer));
    props.history.push('/crm');
  };

  return (
    <div>
      <p>Add Customer Page:</p>
      <CustomerForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect()(CustomerAddPage);
