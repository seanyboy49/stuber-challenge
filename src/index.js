import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { ThemeProvider } from 'styled-components';
import searchResultsReducer from './Data/searchResults/reducer';
import apiStatusReducer from './Data/apiStatus/reducer';
import App from './Components/App';

const combinedReducers = combineReducers({
  apiStatusReducer,
  searchResultsReducer
});

const store = createStore(combinedReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
