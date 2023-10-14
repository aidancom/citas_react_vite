import React from 'react'
import { useEffect, useState } from 'react'
import Error from './Error';
import Acierto from './Acierto';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState(''); 
  const [propietario, sePropietario] = useState(''); 
  const [mail, setMail] = useState(''); 
  const [numero, setNumero] = useState(''); 
  const [alta, setAlta] = useState(''); 
  const [sintomas, setsintomas] = useState(''); 
  const [error, setError] = useState(false);
  const [enviado, setEnviado] = useState(false);
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      sePropietario(paciente.propietario)
      setNumero(paciente.numero)
      setMail(paciente.mail)
      setAlta(paciente.alta)
      setsintomas(paciente.sintomas)

    } 
  }, [paciente]
  )
  const generarId = () => {
    const fecha = Date.now().toString(36);
    return fecha
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre, propietario, mail, numero, alta, sintomas].includes('')) {
      setError(true);
      setEnviado(false);
    } else {
      setError(false);
      setEnviado(true);
      const ObjetoPaciente = {
        nombre,
        propietario,
        mail,
        numero,
        alta,
        sintomas,
      }
      if (paciente.id) {
        console.log("hola")
        ObjetoPaciente.id = paciente.id
        const pacienteActualizados = pacientes.map(pacienteState =>  pacienteState.id === paciente.id ? ObjetoPaciente : pacienteState)
        setPacientes(pacienteActualizados);
        setPaciente({})
      } else {
        console.log("adios")
        ObjetoPaciente.id = generarId()
        setPacientes([...pacientes, ObjetoPaciente]);
      }    
      setNombre('');
      sePropietario('');
      setMail('');
      setAlta('');
      setNumero('');
      setsintomas('');
    }
  
    
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mr-5 ml-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-semibold">Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded py-10 px-5 mb-10">
        {error && <Error mensajeerror='Todos los campos son obligatorios'></Error>}
        {enviado && <Acierto>Se ha enviado el paciente con exito</Acierto>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase">
              Nombre Mascota
          </label>
          <input id="mascota" type='text' value={nombre}  onChange={(e) => setNombre(e.target.value)} placeholder='Nombre de la mascota' className="border-2 w-full mt-2 placeholder-gray-400 rounded p-2"/>
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase">
              Nombre Propietario
          </label>
          <input id="propietario" type='text' value={propietario}  onChange={(e) => sePropietario(e.target.value)} placeholder='Nombre del Propietario' className="border-2 w-full mt-2 placeholder-gray-400 rounded p-2"/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">
              Email
          </label>
          <input id="email" type='email' value={mail}  onChange={(e) => setMail(e.target.value)} placeholder='Correo Propietario' className="border-2 w-full mt-2 placeholder-gray-400 rounded p-2"/>
        </div>
        <div className="mb-5">
          <label htmlFor="numero" className="block text-gray-700 uppercase">
              Numero
          </label>
          <input id="numero" type='text' value={numero}  onChange={(e) => setNumero(e.target.value)} placeholder='Numero Propietario' className="border-2 w-full mt-2 placeholder-gray-400 rounded p-2"/>
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">
              Alta
          </label>
          <input id="alta" type='date' value={alta}  onChange={(e) => setAlta(e.target.value)} className="border-2 w-full mt-2 placeholder-gray-400 rounded p-2"/>
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase">
              Sintomas
          </label>
          <textarea id="sintomas" value={sintomas}  onChange={(e) => setsintomas(e.target.value)} className="border-2 w-full mt-2 placeholder-gray-400 rounded p-2" placeholder='Describe los sitomas'> 

          </textarea>
        </div>
        <input type='submit' className="bg-indigo-600 p-3 w-full text-white font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-all rounded" value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}></input>
      </form>
    </div>
  )
}

export default Formulario
