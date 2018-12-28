import React from 'react';
import {
  Card, CardHeader, CardFooter, CardBody
} from 'reactstrap';
import logo from '../img/LOGE3SAGTES.png';

class Home extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div>
      <div className="container">
        <section className="section-padding">
          <div className="row p-3">
            <div className="col-12">
              <Card>
                <CardHeader>
                  <h2>Sistema de Control General</h2>
                </CardHeader>
                <CardBody>
                  <div className="row">
                    <div className="col-md-3 text-center">
                      <div className="ContenedorImagenImagotipoIndex">
                        <img src={logo} alt="Imagotipo " className="img-thumbnail" title="Eagle" />
                      </div>
                    </div>
                    <div className="col-md-6 text-center">
                      <div className="">
                        <a className="btn btn-block btn-primary" href="#">
                          Compras</a>
                        <br />
                      </div>
                      <div className="">
                        <a className="btn btn-block btn-primary" href="#">
                          Almacen</a>
                        <br />
                      </div>
                      <div className="">
                        <a className="btn btn-block btn-primary" href="#">
                          Administración del Sistema
                          </a>
                      </div>
                    </div>
                    <div className="col-md-3 text-center">
                      <div className="ContenedorImagenImagotipoIndex">
                        <img src={logo} alt="Imagotipo " className="img-thumbnail" title="Eagle" />
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <h3><a href="#" className="text-dark">Rubio Haro Systems</a></h3>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home;
