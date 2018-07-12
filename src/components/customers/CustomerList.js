import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomerListItem from './CustomerListItem';

const CustomerList = props => (
  <div>
    <h1>Customers List</h1>
    <div>
      <Link to="/customer/add">Add Customer</Link>
    </div>
    <ul>
      {props.customers.map(customer => (
        <CustomerListItem
          key={customer.id}
          id={customer.id}
          name={customer.name}
        />
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  customers: state
});

export default connect(mapStateToProps)(CustomerList);
