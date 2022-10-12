import React from 'react';
import { useState, useEffect } from 'react';
import Error from './Error';


function Formulario( { pacientes, setPacientes, paciente }) {

  const [ nombre, setNombre ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ fecha, setFecha ] = useState('');

  const [ error, setError ] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      const { nombre, password, email, fecha } = paciente;

      setNombre(nombre);
      setPassword(password);
      setEmail(email);
      setFecha(fecha);
    }
  }, [paciente])

  function validarCampos(e){
    e.preventDefault();

    const datos = [nombre, password, email, fecha];

    if(datos.includes('')){

      setError(true);

      return;
    }

      setError(false);

      const objdatos = {
        nombre,
        password,
        email,
        fecha,
        id: Date.now()
      }

      if(paciente.id){
        console.log(objdatos);
        console.log(paciente);

      } else {
        console.log('modo agregar');

        setPacientes([...pacientes, objdatos]);
      }

      setNombre('');
      setPassword('');
      setEmail('');
      setFecha('');
  }

  return (
    <div className='md:w-1/2'>
      <h2 className='text-3xl font-black mb-4 text-center'>Formulario Pacientes</h2>

      <p className='text-center font-bold mb-4 text-indigo-700'>Datos de los Pacientes</p>

      <form onSubmit={validarCampos} className='shadow-md bg-white rounded py-10 px-5'>
      
      {error && <Error mensaje='Todos los elementos son necesarios'/>}

        <div className='mb-4'>
          <label className='block mb-2 font-bold' htmlFor='name'>
            Nombre
          </label>
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            id='name'
            placeholder='Name'
            className='border-2 border-gray-400 py-2 w-full px-1'
          />
        </div>

        <div className='mb-4'>
          <label className='block mb-2 font-bold' htmlFor='password'>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            id='password'
            placeholder='Password'
            className='border-2 border-gray-400 py-2 w-full px-1'
          />
        </div>

        <div className='mb-4'>
          <label className='block mb-2 font-bold' htmlFor='mail'>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            id='mail'
            placeholder='Email'
            className='border-2 border-gray-400 py-2 w-full px-1'
          />
        </div>

        <div className='mb-7'>
          <label className='block mb-2 font-bold' htmlFor='fecha'>
            Fecha Nacimiento
          </label>
          <input
            id='fecha'
            type="date"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            className='border-2 border-gray-400 py-2 w-full px-1'
          />
        </div>

        <input
          type="submit"
          value={paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'}
          className='bg-indigo-600 cursor-pointer py-3 text-white font-bold text-center uppercase px-2 w-full rounded hover:bg-indigo-800 transition-all'
        />
      </form>
    </div>
  )
}

export default Formulario