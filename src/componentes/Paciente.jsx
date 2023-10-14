
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar el paciente');
    if(respuesta) {
      eliminarPaciente(paciente.id)
    }
  }
  return (
    
    <div className="bg-white shadow-md mr-5  ml-5 px-5 py-5 rounded mb-5">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
      <span className="font-normal normal-case">{paciente.nombre}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
      <span className="font-normal normal-case">{paciente.propietario}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
      <span className="font-normal normal-case">{paciente.mail}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Numero: {''}
      <span className="font-normal normal-case">{paciente.numero}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}
      <span className="font-normal normal-case">{paciente.alta}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
      <span className="font-normal normal-case">{paciente.sintomas}</span>
    </p>
    <div className='flex justify-between'>
      <button type="button" onClick={() => setPaciente(paciente)} className="bg-indigo-600 p-2 w-32 text-white font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-all rounded">Editar</button>
      <button type="button" onClick={handleEliminar} className="bg-indigo-600 p-2 w-32 ml-3 text-white font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-all rounded">Eliminar</button>
    </div>
  </div>
  )
}

export default Paciente
