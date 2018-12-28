import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Almacen from './Almacen/Almacen';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faClipboardList, faCar, faCog, faSignOutAlt, faChevronUp, faChevronLeft, faBars, faUsers, faDatabase, faServer, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import Home from './Home/Home';
import Administracion from './Administracion/Administracion';

library.add(faHome, faClipboardList, faCar, faCog, faSignOutAlt, faChevronUp, faChevronLeft, faBars, faUsers, faDatabase, faServer,faSlidersH );

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App Fondo">
          <Route path="/" component={Home} />
          <Route path="/Almacen" component={Almacen} />
          <Route path="/Admin" component={Administracion} />
        </div>
      </Router>
    );
  }
}

export default App;
