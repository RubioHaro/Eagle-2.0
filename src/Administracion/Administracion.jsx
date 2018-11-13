import React from 'react';
import cssModule from 'react-css-modules';
import styles from './Administracion.css';

class Administracion extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div>
      Administracion
    </div>
  )
}

export default cssModule(Administracion, styles);
