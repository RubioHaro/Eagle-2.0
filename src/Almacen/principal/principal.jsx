import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Sidebar from './sidebar/sidebar';
let version = 'Beta 0.2';

class principalAlmacen extends Component {

    static propTypes = {}

    render = () => (
        <div>
            
            <div className="slide" id="slide-1" data-slide="1">
                <div className="container">
                <Sidebar/>
                     <div className="row">
                        <div className="col-xl-3 col-md-5 col-7">
                            <div className="wrapper count-title d-flex">
                                <div className="icon"><i className="icon-check"></i></div>
                                <div className="name"><strong className="text-uppercase">Requisiciones Pendientes</strong><span>Ultimo mes</span>
                                    <div className="count-number">7</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-5 col-7">
                            <div className="wrapper count-title d-flex">
                                <div className="icon"><i className="icon-bill"></i></div>
                                <div className="name"><strong className="text-uppercase">Nuevas Requisiciones</strong><span>Ultima semana</span>
                                    <div className="count-number">3</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-5 col-7">
                            <div className="wrapper count-title d-flex">
                                <div className="icon"><i className="icon-user"></i></div>
                                <div className="name"><strong className="text-uppercase">Usuarios Registrados</strong><span>Para Control de Almacen</span>
                                    <div className="count-number">{11}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-5 col-7">
                            <div className="wrapper count-title d-flex">
                                <div className="icon"><i className="icon-padnote"></i></div>
                                <div className="name"><strong className="text-uppercase">Requisiciones Realizadas</strong><span>Este año</span>
                                    <div className="count-number">130</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                version {version}
            </div>
        </div>
    )
}

export default principalAlmacen;
