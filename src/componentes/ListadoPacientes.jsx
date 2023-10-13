import React from 'react'
import Paciente from './Paciente'
import { useEffect } from 'react'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className="w-1/2 lg:w-50 md:h-screen overflow-y-scroll">
        <h2 className="font-black 5 text-center text-3xl">Listado de Pacientes</h2>
      {pacientes && pacientes.length ? (
        <>
        
          <p className="text-lg mt-5 text-center mb-10">
           Pacientes  {''}
          <span className="text-indigo-600 font-semibold">Guardados</span>
        </p>
          {pacientes.map( (paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente = {setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
            
          } )}
        </>
      ): (
        <>
        <p className="text-lg mt-5 text-center mb-10">
         No hay {''}
        <span className="text-indigo-600 font-semibold">Pacientes</span>
      </p>
        </>

      )}
    </div>
   
  )
}

export default ListadoPacientes
