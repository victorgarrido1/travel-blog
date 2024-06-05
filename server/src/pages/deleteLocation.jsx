import React, { useState, useEffect } from 'react';
import BackButton from '../componets/backbutton'; 
import Spinner from '../componets/spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteLocation = () => {
  const [loading, setLoading] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect that will handle a 3-second delay for showing the delete button
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDeleteButton(true);
    }, 3000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleDeleteLocation = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5554/travel/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        alert("An error occurred, please check the console.");
        console.log(err);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete this location</h1>
      {loading && <Spinner />} {/* Show spinner if loading */}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this location?</h3>
        {showDeleteButton && (
          <button
            onClick={handleDeleteLocation}
            className='bg-red-500 text-white px-4 py-2 rounded mt-4 animate-slide-up'
          >
            Delete Location
          </button>
        )}
      </div>
    </div>
  );
};



export default DeleteLocation;