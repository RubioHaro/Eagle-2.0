import React from 'react';
import cssModule from 'react-css-modules';
import styles from './Compras.css';

class Compras extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div>
      Compras
    </div>
  )
}

export default cssModule(Compras, styles);
