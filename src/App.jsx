import { useEffect, useState } from 'react'
import Header from './componentes/Header'
import Formulario from './componentes/Formulario';
import ListadoPacientes from './componentes/ListadoPacientes';
import './App.css'

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }
  return (
    <div className="container mx-auto">
      
      <Header 
       
      />
      <div className="mt-12 md:flex">
     
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        setPaciente = {setPaciente}
        paciente={paciente}
      />
      <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
      </div>

    </div>
  );
}

export default App
