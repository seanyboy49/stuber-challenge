const initialState = {
  noResults: false,
  searching: false
};

function apiStatusReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCHING':
      return {
        ...state,
        searching: action.payload
      };
    case 'UPDATE_NETWORK_RESPONSE':
      return {
        ...state,
        noResults: action.payload
      };
    default:
      return state;
  }
}

export default apiStatusReducer;
