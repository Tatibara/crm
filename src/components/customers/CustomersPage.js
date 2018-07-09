import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CustomersPage = props => (
  <div>
    <h1>Customers List</h1>
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

export default connect(mapStateToProps)(CustomersPage);
