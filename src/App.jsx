import './App.css';
import { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Lista from './components/Lista';


function App() {

  const [ pacientes, setPacientes ] = useState([]);

  const [ paciente, setPaciente ] = useState({});

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
        />
      </div>
    </>
  )
}

export default App
