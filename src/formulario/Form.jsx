import './Form.css'

// Formulario.jsx
import React, { useState } from 'react';
import Carta from '../carta/Carta';

function Formulario() {
  const [datos, setDatos] = useState({
    Nombre: '',
    correo: '',
    direccion: '',
    password: '',
    fecha: '',
  });

  const [mostrarCarta, setMostrarCarta] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarCarta(true);
  };

  return (
    <div className="contform">
      <h1>Datos Personales</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Nombre" placeholder='Nombre' required onChange={handleChange} />
        <br />
        <input type="email" name="correo" placeholder='Correo Electrónico' required onChange={handleChange} />
        <br />
        <input type="text" name="direccion" placeholder='Dirección' required onChange={handleChange} />
        <br />
        <input type="password" name="password" placeholder='Contraseña' required onChange={handleChange} />
        <br />
        <input type="date" name="fecha" required onChange={handleChange} />
        <button type='submit' id='boton'>Enviar</button>
      </form>
      {mostrarCarta && <Carta datos={datos} />}
    </div>
  );
}

export default Formulario;
