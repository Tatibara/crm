import React from 'react';
import { Link } from 'react-router-dom';

const CustomerListItem = ({ id, name }) => (
  <li>
    <Link to="/tasks">{name}</Link> <Link to={`/customer/edit/${id}`}>Edit</Link>
  </li>
);

export default CustomerListItem;
