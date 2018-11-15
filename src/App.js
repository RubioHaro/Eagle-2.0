import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Almacen from './Almacen/Almacen';
import systemInfo from './Almacen/principal/config';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Fondo">
        <div className="container">
        <Router>
          <div className="App">
            <Route path="/" />
            <Route path="/Almacen" component={Almacen} />
            <Route path="/login" component={systemInfo} />
          </div>
        </Router>
        </div>
        
        </div>
      </div>
    );
  }
}

export default App;
