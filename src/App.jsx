import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Almacen from './Almacen/Almacen';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faClipboardList, faCar, faCog, faSignOutAlt, faChevronUp, faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faClipboardList, faCar, faCog, faSignOutAlt, faChevronUp, faChevronLeft, faBars);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App Fondo">
          <Route path="/" />
          <Route path="/Almacen" component={Almacen} />
        </div>
      </Router>
    );
  }
}

export default App;
