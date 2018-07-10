import uuid from 'uuid';

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER';

export const addCustomer = ({
  number,
  createdAt,
  hourlyRate,
  name,
  streetName,
  streetNumber,
  zip,
  city
}) => ({
  type: ADD_CUSTOMER,
  customer: {
    id: uuid(),
    number,
    createdAt,
    hourlyRate,
    name,
    streetName,
    streetNumber,
    zip,
    city
  }
});

const removeCustomer = id => ({
  type: REMOVE_CUSTOMER,
  id
});

const editCustomer = (id, updates) => ({
  type: EDIT_CUSTOMER,
  id,
  updates
});
