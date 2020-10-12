const initialState = {
  searchResults: null
};

function searchResultsReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_RESULTS':
      return {
        searchResults: action.payload
      };
    default:
      return state;
  }
}

export default searchResultsReducer;
