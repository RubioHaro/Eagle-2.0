import React from 'react';
import img from "../../img/LOGE3SAGTES.png";
import version from "../../version.js"

class systemInfo extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div>
      <div className="card">
        <div className="card-header">
          <label>INFORMACIÓN SOBRE SISTEMA DE CONTROL DE ALMACEN</label>
        </div>
        <div className="card-body text-center">
          <img src={img} alt="Isologo" className="img-fluid p-4" width="200" height="150" />
          <p>Versión {version}<i className="fa fa-github"></i></p>
          <p>SISTEMA DE CONTROL DE ALMACEN</p>
          <p>Un desarrollo de Rubio Haro Systems<i className="fa fa-copyright"></i></p>
          <div className="dropdown-divider"></div>
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="form-group p-2">
                <label>Rubio Haro Rodrigo Rodolfo </label><br/>
                <small id="passwordHelpInline" className="text-muted">Programador en Jefe - Diseño, planificación y codificación del sistema</small>
              </div>
            </div>
          </div>
          <div className="dropdown-divider"></div>
        </div>
      </div>
    </div>
  )
}

export default systemInfo;
