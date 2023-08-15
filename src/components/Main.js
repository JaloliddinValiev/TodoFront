import React, { useState } from 'react';
import './design.css';

function Main() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSave = () => {
    // You can add your save logic here
    console.log('Title:', title);
    console.log('Description:', description);
  };

  return (
    <div className="app-container">
      <h1>Title and Description Input</h1>
      <div className="input-container">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Main;
