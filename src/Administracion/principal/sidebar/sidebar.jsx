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

        this.toggleNavbarSystems = this.toggleNavbarSystems.bind(this);
        this.changeChevron = this.changeChevron.bind(this);
        this.onClickFunction = this.onClickFunction.bind(this);
        this.open = false;
        this.openIcon = <FontAwesomeIcon className="arrow" icon="chevron-up" />
        this.closeIcon = <FontAwesomeIcon className="arrow" icon="chevron-left" />

        this.state = {
            collapsed_systems: true,
            open: false,
        };
    }
    onClickFunction() {
        this.toggleNavbarSystems();
        this.changeChevron();
    }

    changeChevron() {
        this.setState({
            open: !this.state.open
        });
    }

    toggleNavbarSystems() {
        this.setState({
            collapsed_systems: !this.state.collapsed_systems
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
                                <h5>RUBIO HARO</h5><span>Administracion</span>
                            </div>
                            <div className="sidenav-header-logo"><a className="brand-small text-center">
                                <img src={logo} alt="Colaborador" className="img-fluid rounded-circle" />
                            </a></div>
                        </div>
                        <div className="main-menu">
                            <h5 className="sidenav-heading">Panel Admin</h5>
                            <ul id="side-main-menu" className="side-menu list-unstyled">
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink>
                                            <FontAwesomeIcon icon="users" /> Usuarios
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <FontAwesomeIcon icon="car" />  Parque Vehicular
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink onClick={this.onClickFunction}>
                                            <FontAwesomeIcon icon="server" />  Sistemas {this.state.open ? this.openIcon : this.closeIcon}
                                        </NavLink>
                                        <Collapse isOpen={!this.state.collapsed_systems} navbar>
                                            <Nav navbar>
                                                <NavItem>
                                                    <NavLink>
                                                        <FontAwesomeIcon icon="database" />  Respaldos
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink>
                                                        <FontAwesomeIcon icon="sliders-h" />  Configuración
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Collapse>
                                    </NavItem>
                                </Nav>
                            </ul>
                        </div>
                        <div className="admin-menu">
                            <h5 className="sidenav-heading">Cuenta</h5>
                            <ul id="side-admin-menu" className="side-menu list-unstyled">
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="./info">
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