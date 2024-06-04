import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/backbutton'; // Ensure the correct import based on your export
import Spinner from '../components/spinner'; // Ensure the correct import based on your export

const ShowLocation = () => {
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5554/travel/${id}`)
      .then((response) => {
        setLocation(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Location</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-grey-500'>Name: </span>
          <span>{location.name}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-grey-500'>Title: </span>
          <span>{location.title}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-grey-500'>Summary: </span>
          <span>{location.summary}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowLocation;
