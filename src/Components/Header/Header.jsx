import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    } 7

    render = () => (
        <div>
            <header className="header">
                <Navbar className="navbar">
                    <div className="container-fluid">
                        <div className="navbar-holder d-flex align-items-center justify-content-between">
                            <div className="navbar-header">
                                <NavbarToggler onClick={this.toggle} >
                                    <a href="#">
                                        <FontAwesomeIcon icon="bars" />
                                    </a>
                                </NavbarToggler>
                                <NavbarBrand >
                                    <div className="brand-text d-none d-md-inline-block">
                                        <strong className="text-primary">S</strong><span>istema de </span><strong className="text-primary"> C</strong><span>ontrol de</span><strong className="text-primary"> A</strong><span>lmacen y </span><strong className="text-primary"> C</strong><span>ompras</span>
                                    </div>
                                </NavbarBrand>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </header>
        </div>
    )
}

export default Header;
