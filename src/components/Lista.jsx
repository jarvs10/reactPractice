import Pacientes from './Pacientes';

function Lista({pacientes, setPaciente}) {

  return (
    <div className='md:w-1/2'>

    {pacientes && pacientes.length ? (
      <>
        <h2 className='text-3xl font-black text-center mb-4'>Listado</h2>

        <p className='text-center font-bold mb-4  text-indigo-700'>Administra tus pacientes</p>

        <div className='h-screen overflow-y-scroll'>
          {pacientes.map(paciente => {
            return (
              <Pacientes
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
              />
            )
          })}
          
        </div>
      </>
      
    ) : (
      <>
        <h2 className='text-3xl font-black text-center mb-4'>Listado</h2>

        <p className='text-center font-bold mb-4  text-indigo-700'>Aqui puedes ingresar tus pacientes</p>
      </>
    )}

    

    </div>
  )
}

export default Lista