import React, { useState } from 'react';
import JogadoresTitulados from '../components/JogadoresTitulados';
import './styles/Titulos.css';

const Titulos = () => {
  const [title, setTitle] = useState('GM');

  return (
    <div className='principal_titulos'>
      <h1>Jogadores Titulados</h1>
      <JogadoresTitulados title={title} />
    </div>
  );
};

export default Titulos;

