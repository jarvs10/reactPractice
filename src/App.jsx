import './App.css';
import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Lista from './components/Lista';


function App() {

  const Initial = JSON.parse(localStorage.getItem('pacientes')) ?? [];

  const [ pacientes, setPacientes ] = useState(Initial);

  const [ paciente, setPaciente ] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacienteActualizado = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacienteActualizado);
  }

  return (
    <>
      <Header />
    
      <div className='md:flex md:justify-between gap-4'>
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <Lista 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </>
  )
}

export default App
