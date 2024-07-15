import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './styles/JogadoresTitulados.css';

const JogadoresTitulados = ({ title }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJogadoresTitulados = async () => {
      try {
        const response = await axios.get(`https://api.chess.com/pub/titled/${title}`);
        setPlayers(response.data.players);
      } catch (err) {
        setError('Failed to load titled players data');
      } finally {
        setLoading(false);
      }
    };

    fetchJogadoresTitulados();
  }, [title]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='titulo_principal'>
      <h2>Jogadores Titulados ({title})</h2>
      <ul>
        {players.length > 0 ? (
          players.map(player => (
            <li key={player}>{player}</li>
          ))
        ) : (
          <p>Sem jogadores encontrados</p>
        )}
      </ul>
    </div>
  );
};

JogadoresTitulados.propTypes = {
  title: PropTypes.string.isRequired,
};

export default JogadoresTitulados;
