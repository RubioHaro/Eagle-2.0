import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Almacen from './Almacen/Almacen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Fondo">
        <Almacen></Almacen>
        </div>
      </div>
    );
  }
}

export default App;
