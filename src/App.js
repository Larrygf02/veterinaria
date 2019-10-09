import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita'

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

   //agregar el nueva 
  }
  render() {
    return (
      <div className="container">
          <Header titulo="Paciente veterinaria"></Header>
          <div className="row">
              <div className="col-md-10 mx-auto">
               <NuevaCita crearNuevaCita={this.crearNuevaCita}></NuevaCita>  
              </div>
          </div>
      </div>
    )
  }
}

export default App;
