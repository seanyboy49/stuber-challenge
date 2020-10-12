export const updateAPIStatus = status => ({
  payload: status,
  type: 'SEARCHING'
});

export const updateNetworkResponse = status => ({
  payload: status,
  type: 'UPDATE_NETWORK_RESPONSE'
});
