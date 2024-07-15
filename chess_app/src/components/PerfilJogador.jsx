import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './styles/PerfilJogador.css';

const PerfilJogador = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (username) {
      const fetchProfile = async () => {
        try {
          const response = await axios.get(`https://api.chess.com/pub/player/${username}`);
          setProfile(response.data);
          if (response.data.country) {
            const countryCode = response.data.country.split('/').pop();
            const countryResponse = await axios.get(`https://api.chess.com/pub/country/${countryCode}`);
            setCountry(countryResponse.data.name);
          }
        } catch (err) {
          setError('Failed to load profile data');
        } finally {
          setLoading(false);
        }
      };

      fetchProfile();
    }
  }, [username]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return profile ? (
    <div className='player_profile'>
      <h2>{profile.username}</h2>
      <p>Nome: {profile.name || 'N/A'}</p>
      <p>Localização: {profile.location || 'N/A'}</p>
      <p>País: {country || 'N/A'}</p>
      <p>Ingressou: {new Date(profile.joined * 1000).toLocaleDateString()}</p>
      <p>Seguidores: {profile.followers}</p>
      {profile.avatar && <img src={profile.avatar} alt="avatar" />}
    </div>
  ) : (
    <p>Nenhum dado de perfil disponível</p>
  );
};

PerfilJogador.propTypes = {
  username: PropTypes.string.isRequired,
};

export default PerfilJogador;


