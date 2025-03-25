import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPlayer, deletePlayer } from '../API/index';

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayer() {
      const singlePlayer = await fetchPlayer(id);
      setPlayer(singlePlayer);
    }
    getPlayer();
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    await deletePlayer(id);
    navigate('/');
  };

  return (
    <div className="one-puppy">
      <h2>{player.name}</h2>

      {player.imageUrl && (
        <img 
          src={player.imageUrl} 
          alt={player.name} 
          style={{ maxWidth: '300px', borderRadius: '8px', marginTop: '10px' }} 
        />
      )}

      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      
      <button onClick={handleDelete}>Delete Player</button>
      <button onClick={() => navigate('/')}>Back to All Players</button>
    </div>
  );
}
