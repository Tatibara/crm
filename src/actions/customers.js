
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER';

export const addCustomer = customer => ({
  type: ADD_CUSTOMER,
  customer
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
