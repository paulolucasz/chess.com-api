import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PerfilJogador from '../components/PerfilJogador';
import StatusJogador from '../components/StatusJogador';
import './styles/Home.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUsername(username);
  };

  return (
    <div className='principal_home'>
      <h1>Buscar jogadores Chess.com</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite um nome de usuário "
        />
        <button type="submit">Buscar</button>
      </form>
      {submittedUsername && (
        <div className="profiles_container">
          <div className="player_profile">
            <PerfilJogador username={submittedUsername} />
          </div>
          <div className="player_stats">
            <StatusJogador username={submittedUsername} />
          </div>
        </div>
      )}
      <Link to="/titulos" className='link_home' target='_blank'>Ver jogadores titulados</Link>
    </div>
  );
};

export default Home;





