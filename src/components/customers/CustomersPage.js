import React from 'react';
import { Link } from 'react-router-dom';

const CustomersPage = () => (
  <div>
    <h1>Customers List</h1>
    <ul>
      <li><Link to="/tasks">Customer 1</Link> <Link to="/customer/edit/2">Edit</Link></li>
      <li><Link to="/tasks">Customer 2</Link> <Link to="/customer/edit/2">Edit</Link></li>
    </ul>
  </div>
);

export default CustomersPage;
