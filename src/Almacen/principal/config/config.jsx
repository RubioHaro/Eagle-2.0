import React, { Component } from 'react';
import { Link } from "react-router-dom";
import img from "../../../img/LOGE3SAGTES.png";
import { Button } from 'reactstrap';

class Config extends Component {
    render() {
        return (
            <div className="container m-3">
                <div className="card">
                    <div class="card-header">
                        <h1 class="h1">
                            {"Rodrigo R. Rubio Haro"}
                        </h1>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="ID" class="control-label">Identificador de Usuario:</label>
                                                <input value="" disabled required
                                                    class="form-control"
                                                    id="disabledInput"
                                                    type="text" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="Email">Correo Electronico:</label>
                                                <input
                                                    name="Email"
                                                    autocomplete="email"
                                                    value=""
                                                    type="mail" disabled
                                                    class="form-control" required
                                                    id="Mail" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="dropdown-divider"></div>
                                            <div class="row form-inline">
                                                {/* <div class="col-md-6 text-right">
                                                    <button class="btn">
                                                        Cuenta <i class="fa fa-user-circle-o"></i>
                                                    </button>
                                                </div>
                                                <div class="col-md-6">
                                                    <button class="btn">
                                                        Sistema <i class="fa fa-cogs"></i>
                                                    </button>
                                                </div> */}
                                                <div class="col-md-12 text-center">
                                                    <Link to={`./info`} className="btn" activeClassName="active">
                                                        <Button outline color="danger" size="sm">
                                                            Sistema <i class="fa fa-cogs"></i>
                                                        </Button>{' '}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 text-center">
                                <div>
                                    <img alt="Foto Usuario" src={img} width="150" height="150" class="img-responsive img-thumbnail" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Config;