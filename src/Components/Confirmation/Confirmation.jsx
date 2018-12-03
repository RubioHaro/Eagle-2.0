import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Confirmation extends React.Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render = () => (
    <div>
      <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{this.props.header}</ModalHeader>
        <ModalBody>
          {this.props.message}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Confirmar</Button>
          <Button color="danger" onClick={this.toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Confirmation;
