import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux';
import CarsProvider from './context/CarsProvider';

ReactDOM.render(
  <CarsProvider>
    <App />
  </CarsProvider>,  
  document.getElementById('root'),
);
