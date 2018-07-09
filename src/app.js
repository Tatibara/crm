import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';
import customerReducer from './reducers/customers';
import { addCustomer } from './actions/customers';
import './styles/styles.scss';

const customerExample = {
  id: '123',
  number: '18-05-24',
  name: 'Service Partner ONE GmbH',
  streetName: 'Winsstraße',
  streetNumber: '62',
  zip: '10405',
  city: 'Berlin'
};
const customerExample2 = {
  id: '234',
  number: '18-05-24',
  name: 'Service Partner ONE GmbH',
  streetName: 'Winsstraße',
  streetNumber: '62',
  zip: '10405',
  city: 'Berlin'
};

const store = createStore(customerReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addCustomer(customerExample));
store.dispatch(addCustomer(customerExample2));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
