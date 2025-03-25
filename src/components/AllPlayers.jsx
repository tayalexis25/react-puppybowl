import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../API/index';

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const allPlayers = await fetchPlayers();
      setPlayers(allPlayers);
    }
    getPlayers();
  }, []);

  useEffect(() => {
    const results = players.filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(results);
  }, [searchTerm, players]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Puppy Bowl! 🏈  v2</h2>
      <input
        type="text"
        placeholder="Search players..."
        value={searchTerm}
        onChange={handleChange}
      />

      {filteredPlayers.map((player) => (
        <div 
          key={player.id} 
          style={{ border: '3px dotted #ddd', padding: '10px', margin: '10px 0', borderRadius: '8px' }}
        >
          <Link to={`/players/${player.id}`} style={{ textDecoration: 'underline wavy #101010', color: '#101010', fontSize: '25px' }}>
            <h4>{player.name}</h4>
          </Link>
          <p>{player.breed}</p>

          {player.imageUrl && (
            <img 
              src={player.imageUrl} 
              alt={player.name} 
              style={{ maxWidth: '150px', height: 'auto', borderRadius: '8px', marginTop: '5px' }} 
            />
          )}
        </div>
      ))}
    </div>
  );
}

