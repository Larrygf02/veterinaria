import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCitas'

class App extends Component {
  state = {
    citas: []
  }

  crearNuevaCita = datos => {
    //copiar el state actual 
    const citas = [...this.state.citas, datos];
    this.setState({
      citas
    })
  }

  eliminarCita = id => {
    // tomar una copia del state
    const citasActuales = [...this.state.citas]
    //utilizar filter para sacar el elemento del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id)
    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
          <Header titulo="Paciente veterinaria"></Header>
          <div className="row">
              <div className="col-md-10 mx-auto">
               <NuevaCita crearNuevaCita={this.crearNuevaCita}></NuevaCita>  
              </div>
              <div className="mt-5 col-md-10 mx-auto">
                <ListaCitas
                  citas={this.state.citas}
                  eliminarCita={this.eliminarCita}
                  ></ListaCitas>
              </div>
          </div>
      </div>
    )
  }
}

export default App;
