import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllPlayers } from "../API/index";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAllPlayers() {
      const APIResponse = await fetchAllPlayers();
      console.log(APIResponse.data.players);
      if (APIResponse.success) {
        setPlayers(APIResponse.data.players);
      } else {
        setError(APIResponse.error.message);
      }
    }

    getAllPlayers();
  }, []);

  const playersToDisplay = players;

  return (
    <div>
      <h2>All Players</h2>
    </div>
  );
};