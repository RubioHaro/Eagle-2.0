import React from 'react';
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import logo from '../../../img/LOGE3SAGTES.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbarInventario = this.toggleNavbarInventario.bind(this);
        this.toggleNavbarRequisiciones = this.toggleNavbarRequisiciones.bind(this);
        this.changeChevron = this.changeChevron.bind(this);
        this.onClickFunction = this.onClickFunction.bind(this);
        this.open = false;
        this.openIcon = <FontAwesomeIcon className="arrow" icon="chevron-up" />
        this.closeIcon = <FontAwesomeIcon className="arrow" icon="chevron-left" />

        this.state = {
            collapsed_inventario: true,
            collapsed_requisiciones: true,
            open: false,
        };
    }
    onClickFunction() {
        this.toggleNavbarInventario();
        this.changeChevron();
    }

    changeChevron() {
        this.setState({
            open: !this.state.open
        });
    }

    toggleNavbarInventario() {
        this.setState({
            collapsed_inventario: !this.state.collapsed_inventario
        });
    }
    toggleNavbarRequisiciones() {
        this.setState({
            collapsed_requisiciones: !this.state.collapsed_requisiciones
        });
    }

    render() {
        return (
            <div>
                <nav className="side-navbar">
                    <div className="side-navbar-wrapper">
                        <div className="sidenav-header d-flex align-items-center justify-content-center">
                            <div className="sidenav-header-inner text-center">
                                <img src={logo} alt="Colaborador" className="img-fluid rounded-circle" />
                                <h5>RUBIO HARO</h5><span>Almacen</span>
                            </div>
                            <div className="sidenav-header-logo"><a className="brand-small text-center">
                                <img src={logo} alt="Colaborador" className="img-fluid rounded-circle" />
                            </a></div>
                        </div>
                        <div className="main-menu">
                            <h5 className="sidenav-heading">Panel Almacen</h5>

                            <ul id="side-main-menu" className="side-menu list-unstyled">
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink onClick={this.onClickFunction}>
                                            <FontAwesomeIcon icon="home" />  Inventario {this.state.open ? this.openIcon : this.closeIcon}
                                        </NavLink>
                                        <Collapse isOpen={!this.state.collapsed_inventario} navbar>
                                            <Nav navbar>
                                                <NavItem>
                                                    <NavLink>Salidas</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink>Entradas</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink>Existencias</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink>Catálogo</NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Collapse>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleNavbarRequisiciones}>
                                            <FontAwesomeIcon icon="clipboard-list" />  Requisición
                                        </NavLink>
                                        <Collapse isOpen={!this.state.collapsed_requisiciones} navbar>
                                            <Nav navbar>
                                                <NavItem>
                                                    <NavLink>Elaborar Requisición</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink>Consultar Requisición</NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Collapse>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <FontAwesomeIcon icon="car" />  Parque Vehicular
                                        </NavLink>
                                    </NavItem>
                                    <ul id="side-main-menu" class="side-menu list-unstyled">
                                        <li><a href="#Inventario" aria-expanded="false" data-toggle="collapse"> <i class="fa fa-database"></i>Respaldos BDD </a></li>
                                    </ul>I
                                </Nav>
                            </ul>
                        </div>
                        <div className="admin-menu">
                            <h5 className="sidenav-heading">Cuenta</h5>
                            <ul id="side-admin-menu" className="side-menu list-unstyled">
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink>
                                            <FontAwesomeIcon icon="cog" />  Configuración
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <FontAwesomeIcon icon="sign-out-alt" />  Cerrar sesión
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}