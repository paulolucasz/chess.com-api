import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/StatusJogador.css';

const StatusJogador = ({ username }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (username) {
      axios.get(`https://api.chess.com/pub/player/${username}/stats`)
        .then(response => setStats(response.data))
        .catch(error => console.error(error));
    }
  }, [username]); 

  return stats ? (
    <div className='principal'>
      <h2>Estatísticas de {username}</h2>
      <div className='rapido'>
        <h3>Rápido</h3>
        <p>Rating: {stats.chess_rapid?.last?.rating}</p>
        <p>Vitórias: {stats.chess_rapid?.record?.win}</p>
        <p>Derrotas: {stats.chess_rapid?.record?.loss}</p>
        <p>Empates: {stats.chess_rapid?.record?.draw}</p>
        <p>Melhor Rating: {stats.chess_rapid?.best?.rating}</p>
      </div>
      <div className='bullet'>
        <h3>Bullet</h3>
        <p>Rating: {stats.chess_bullet?.last?.rating}</p>
        <p>Vitórias: {stats.chess_bullet?.record?.win}</p>
        <p>Derrotas: {stats.chess_bullet?.record?.loss}</p>
        <p>Empates: {stats.chess_bullet?.record?.draw}</p>
        <p>Melhor Rating: {stats.chess_bullet?.best?.rating}</p>
      </div>
      <div className='blitz'>
        <h3>Blitz</h3>
        <p>Rating: {stats.chess_blitz?.last?.rating}</p>
        <p>Vitórias: {stats.chess_blitz?.record?.win}</p>
        <p>Derrotas: {stats.chess_blitz?.record?.loss}</p>
        <p>Empates: {stats.chess_blitz?.record?.draw}</p>
        <p>Melhor Rating: {stats.chess_blitz?.best?.rating}</p>
      </div>
      <div className='rating_fide'>
        <h3>FIDE</h3>
        <p>Rating: {stats.fide}</p>
      </div>
    </div>
  ) : (
    <p>Carregando...</p>
  );
};

export default StatusJogador;


