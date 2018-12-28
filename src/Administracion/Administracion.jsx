import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './Administracion.css';
import Config from '../Components/Config/config';
import systemInfo from '../Components/Config/system-info';
import Sidebar from './principal/sidebar/sidebar';
import Header from '../Components/Header/Header';
import principalAlmacen from '../Almacen/principal/principal';
import Messages from '../Components/Messages/Messages';
import Confirmation from '../Components/Confirmation/Confirmation';

class Administracion extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div>
      <div className="slide" id="slide-1" data-slide="1">
        <Sidebar />
        <div className="page">
          <Header />
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route path="/Admin/home" component={principalAlmacen} />
                <Route path="/Admin/info" component={systemInfo} />
                <Route path="/Admin/config" component={Config} />

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

export default Administracion;
