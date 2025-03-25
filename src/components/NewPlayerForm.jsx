import React, { useState } from 'react';
import { createPlayer } from '../API/index';
import { useNavigate } from 'react-router-dom';

export default function NewPlayerForm() {
const [name, setName] = useState('');
const [breed, setBreed] = useState('');
const [imageUrl, setImage] = useState('')
const navigate = useNavigate();

const handleSubmit = async (event) => {
    event.preventDefault();
    await createPlayer({ name, breed });
    navigate('/');
};

return (
    <div>
    <h2>Create New Player</h2>
    <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Breed:</label>
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        <label>Image URL:</label>
            <input type="text" value={imageUrl} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Create</button>
    </form>
    </div>
);
}
