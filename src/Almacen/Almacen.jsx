import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import principalAlmacen from './principal/principal';
import Sidebar from './principal/sidebar/sidebar';
import Config from './principal/config/config';
import Messages from '../Components/Messages/Messages';
import Confirmation from '../Components/Confirmation/Confirmation';
import Header from '../Components/Header/Header';
import systemInfo from '../Components/Config/system-info';

class Almacen extends Component {

  static propTypes = {}

  render = () => (
    <div>
      <div className="slide" id="slide-1" data-slide="1">
        <Sidebar />
        <div className="page">
          <Header />
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route path="/Almacen/home" component={principalAlmacen} />
                <Route path="/Almacen/info" component={systemInfo} />
                <Route path="/Almacen/config" component={Config} />

                {/* A revisar */}
                {/* <Redirect to="Almacen/home" /> */}
              </Switch>
            </BrowserRouter>
            <Messages header="Mensaje del sistema" message="Hola mundo" buttonLabel="Abrir mensajes" />
            <Confirmation header="Confirmación" message="Estas seguro que deseas cerrar sesión?" buttonLabel="confirmar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Almacen;
