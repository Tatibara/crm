import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CustomerList = props => (
  <div>
    <h1>Customers List</h1>
    <div>
      <Link to="/customer/add">Add Customer</Link>
    </div>
    <ul>
      {props.customers.map(customer => (
        <li key={customer.id}>
          <Link to="/tasks">{customer.name}</Link>{' '}
          <Link to="/customer/edit/2">Edit</Link>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  customers: state
});

export default connect(mapStateToProps)(CustomerList);
