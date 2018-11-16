import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Almacen from './Almacen/Almacen';
import systemInfo from './Almacen/principal/config';
import principalAlmacen from './Almacen/principal/principal';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faClipboardList, faCar, faCog, faSignOutAlt, faChevronUp, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faClipboardList, faCar, faCog, faSignOutAlt,faChevronUp, faChevronLeft);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Fondo">
          <div className="container">
            <Router>
              <div className="App">
                <Route path="/" />
                <Route path="/Almacen/login" component={Almacen} />
                <Route path="/Almacen/principal" component={principalAlmacen} />
                <Route path="/Almacen/info" component={systemInfo} />
              </div>
            </Router>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
