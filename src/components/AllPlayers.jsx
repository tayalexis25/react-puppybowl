import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../API/index';

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const allPlayers = await fetchPlayers();
      setPlayers(allPlayers);
    }
    getPlayers();
  }, []);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((player) => (
        <div key={player.id}>
          <Link to={`/players/${player.id}`}>
            <h4>{player.name}</h4>
          </Link>
          <img 
          src={player.imageUrl} 
          alt={`${player.name}`} 
          style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "10px" }} 
        />
          <p>{player.breed}</p>
        </div>
      ))}
    </div>
  );
}

