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

{/* <div className='flex justify-between items-center mt-4'>
<Link to={`/locations/${item._id}`} className='text-blue-500 hover:text-blue-700'>
    <AiOutlineEdit className='text-yellow-500 hover:text-yellow-700' />
</Link> */}

// const LocationCard = ({ location }) => {
//     console.log(location)
//     return (
//         <div className='border p-4 rounded shadow'>
//             <h2 className='text-lg font-bold'>{location.name}</h2>
//             <p>{location.address}</p>
//             <p>{location.description}</p>
//             {/* Add more details as necessary */}
//         </div>
//     );
// };