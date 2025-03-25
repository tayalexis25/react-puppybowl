const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players';

export const fetchPlayers = async () => {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
};

export const fetchPlayer = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error(`Error fetching player ${id}:`, error);
    return null;
  }
};

export const createPlayer = async (player) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error('Error creating player:', error);
    return null;
  }
};

export const deletePlayer = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(`Error deleting player ${id}:`, error);
        return null;
    }
};