import React, {Component} from 'react';

class Almacen extends Component {
  static propTypes = {

  }
  render = () => (
    <div>
      <div class="slide" id="slide-1" data-slide="1">
        <div class="container">
          <div class="card">
            <div class="card-header">
              <p class="h2">SISTEMA DE  CONTROL DE ALMACEN</p>
            </div>
            <div class="card-body">

              <div class="row">
                <div class="col-md-4">
                  <div class="ContenedorImagenImagotipoIndex">
                    <a href="../Index.jsp">
                      <img src="../Img/IsoLogo.jpg" alt="Imagotipo Aguila Bicefala" class="img-thumbnail" title="Grupo Aguila Bicefala" />
                    </a>
                  </div>
                </div>
                <div class="col-md-8  text-justify">
                  <form method="POST" action="../Ingreso">
                    <div class="form-group">
                      <label for="Usuario">Usuario</label>
                      <input autofocus type="text" autocomplete="username" class="form-control" name="Usuario" required placeholder="Usuario" id="Usuario" />
                    </div>
                    <div class="form-group">
                      <label for="Usuario">Contraseña:</label>
                      <input type="password" autocomplete="current-password" class="form-control" name="Pass" required placeholder="Contraseña" id="Pass" />
                    </div>
                    <div class="form-group text-center">
                      <button type="submit" name="Sistema" value="Almacen" class="btn btn-danger">Acceder</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <p class="h4">Eagle Proyect - Rubio Haro Systems.</p>
            </div>
          </div>

        </div>
        {console.log("version 1.0")}
      </div>
    </div>
  )
}

export default Almacen;
