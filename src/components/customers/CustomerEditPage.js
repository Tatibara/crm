import React from 'react';
import { connect } from 'react-redux';
import CustomerForm from './CustomerForm';
import { editCustomer } from '../../actions/customers';

const CustomerEditPage = props => {
  const onSubmit = customer => {
    // props.dispatch(addCustomer(customer)); editCustomer
    props.history.push('/crm');
  };

  console.log(props.customer);

  return (
    <div>
      <p>Edit Customer with id {props.match.params.id}</p>
      <CustomerForm customer={props.customer} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  customer: state.find(customer => customer.id === props.match.params.id)
});

export default connect(mapStateToProps)(CustomerEditPage);
