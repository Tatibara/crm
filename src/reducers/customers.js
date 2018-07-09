// Customers Reducer
/* const customerEx = {
  id: 'jhhghjghjg65765756757'
  number: '18-05-24',
  name: 'Service Partner ONE GmbH',
  streetName: 'Winsstraße 62',
  streetNumber: '62',
  zip: '10405',
  city: 'Berlin'
}; */
import {
  ADD_CUSTOMER,
  REMOVE_CUSTOMER,
  EDIT_CUSTOMER
} from '../actions/customers';

const defaultCustomerReducerState = [];

export default (state = defaultCustomerReducerState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [...state, action.customer];
    default:
      return state;
  }
};
