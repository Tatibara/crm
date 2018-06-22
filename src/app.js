import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import CRMApp from './components/CRMApp';
import './styles/styles.scss';

const Home = () => <h1>Home Page</h1>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/crm" component={CRMApp} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
