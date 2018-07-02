import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import TasksPage from '../components/tasks/TasksPage';
import CustomersPage from '../components/customers/CustomersPage';
import CustomerEditPage from '../components/customers/CustomerEditPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/crm" component={CustomersPage} exact />
        <Route path="/customer/edit/:id" component={CustomerEditPage} />
        <Route path="/tasks" component={TasksPage} />
        <Route path="/login" component={LoginPage} email="taty@baradari.com" />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <LoginPage email="dfsdf"/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
