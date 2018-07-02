import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h2>Header</h2>
    <NavLink to="/" activeClassName="is-active" exact>Home</NavLink> | <NavLink to="/crm" activeClassName="is-active">CRM</NavLink> | <NavLink to="/login" activeClassName="is-active">Login</NavLink>
  </div>
);

export default Header;
