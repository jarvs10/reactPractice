import React from 'react'

function Pacientes({paciente, setPaciente, eliminarPaciente}) {

  const { nombre, password, email, fecha, id } = paciente;

  const handleDelete = () => {
    const response = confirm('Deseas eliminar el paciente?');

    if(response){
      eliminarPaciente(id);
    }
  }
  
  return (

    <div className='shadow-md bg-white rounded py-10 px-5 mb-2'>
        <div className='mb-2 '>
            <p className='font-bold'>
                Paciente:
                <span className='font-normal'> {nombre} </span>
            </p>
        </div>

        <div className='mb-2'>
            <p className='font-bold'>
              Password:
              <span className='font-normal'> {password} </span>
            </p>
        </div>

        <div className='mb-2'>
            <p className='font-bold'>
              Email:
              <span className='font-normal'> {email} </span>
            </p>
        </div>

        <div className='mb-4'>
            <p className='font-bold'>
              Fecha de Nacimiento:
              <span className='font-normal'> {fecha} </span>
            </p>
        </div>

        <div className='flex gap-2'>
          
          <button type="button"
          onClick={ () => setPaciente(paciente) }
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold rounded-lg'>
          Editar
          </button>

          <button type="button"
          onClick={ handleDelete }
          className='py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold rounded-lg'>
          
          Eliminar</button>

        </div>
    </div>
  )
}

export default Pacientes