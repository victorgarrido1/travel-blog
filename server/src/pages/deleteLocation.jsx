import React, { useState, useEffect } from 'react';
import BackButton from '../components/backbutton';
import Spinner from '../components/spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { enqueueSnackbar, useSnackbar } from 'notistack';

const DeleteLocation = () => {
  const [loading, setLoading] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();  // Corrected destructuring
  const { id } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDeleteButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDeleteLocation = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5554/travel/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Location has been successfully deleted", { variant: "success" });
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar('An error occurred, please check the console.', { variant: 'error' });
        console.log(err);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete this location</h1>
      {loading && <Spinner />}
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
