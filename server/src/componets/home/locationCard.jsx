import React from 'react';
import { Link } from 'react-router-dom';
import { MdCardTravel } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoSquare } from 'react-icons/bs';
import LocationSingleCard from './locationSingleCard';

const LocationCard = ({ locations = [] }) => {
    console.log(locations); // Ensure locations data is correct

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {locations.map((item) => (
                <LocationSingleCard key={item._id} location={item} />
            ))}
        </div>
    );
};

export default LocationCard;

