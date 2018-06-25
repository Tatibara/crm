import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import CRMApp from './components/CRMApp';
import NotFoundPage from './components/NotFoundPage';
import './styles/styles.scss';

const Home = () => <h1>Home Page</h1>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/crm" component={CRMApp} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
