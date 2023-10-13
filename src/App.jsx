import { useEffect, useState } from 'react'
import Header from './componentes/header'
import Formulario from './componentes/formulario';
import ListadoPacientes from './componentes/ListadoPacientes';
import './App.css'

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS());
    }
    obtenerLS();
  }, []);
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])
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