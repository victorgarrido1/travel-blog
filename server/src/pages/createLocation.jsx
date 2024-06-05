import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateLocation = () => {
  const [locationName, setLocationName] = useState('');
  const [summary, setSummary] = useState('');
  const [userNotes, setUserNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveLocation = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const data = {
      locationName,
      summary,
      userNotes,   
    };
    
    setLoading(true);
    axios.post('http://localhost:5554/travel', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        alert('An error occurred, please check the console');
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Create New Location</h1>
      <form onSubmit={handleSaveLocation}>
        <div>
          <label>Location Name:</label>
          <input 
            type="text" 
            value={locationName} 
            onChange={(e) => setLocationName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Summary:</label>
          <input 
            type="text" 
            value={summary} 
            onChange={(e) => setSummary(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>User Notes:</label>
          <textarea 
            value={userNotes} 
            onChange={(e) => setUserNotes(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save Location'}
        </button>
      </form>
    </div>
  );
};

export default CreateLocation;