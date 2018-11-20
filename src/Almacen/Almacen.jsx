import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import principalAlmacen from './principal/principal';
import systemInfo from './principal/config';
import Sidebar from './principal/sidebar/sidebar';

class Almacen extends Component {

  static propTypes = {}

  render = () => (
    <div>
      <div className="slide" id="slide-1" data-slide="1">
        <Sidebar />
        <div className="page">
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route path="/Almacen/home" component={principalAlmacen} />
                <Route path="/Almacen/info" component={systemInfo} />

                {/* A revisar */}
                {/* <Redirect to="Almacen/home" /> */}
              </Switch>
            </BrowserRouter>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Almacen;
