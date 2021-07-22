import React from 'react';
import './App.css';
import Cars from './Cars';
// import { Provider } from 'react-redux';
// import CarsContext from './context/CarsContext';

class App extends React.Component {
  render() {
    return (      
      <div>
        <h1>Exercicio context Api - Refatorando</h1>
        <Cars />        
      </div>     
    );
  }
}

export default App;
