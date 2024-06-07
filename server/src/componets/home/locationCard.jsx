import React from 'react';
import { Link } from 'react-router-dom';
import { MdCardTravel } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoSquare } from 'react-icons/bs';

const LocationCard = ({ locations }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {locations.map((item) => (
                <div 
                    key={item._id}
                    className='border-2 border-grey-500 rounded-lg px-3 py-2 m-4 relative hover:shadow-xl'>
                    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300'>{item.name}</h2>
                    <h4 className='my-2 text-green-500'>{item._id}</h4>
                    <div className='flex justify-center items-center gap-x-2'>
                        <MdCardTravel className='text-red-300 text-2xl' />
                        <p className='text-gray-700'>{item.address?.city}</p>
                    </div>
                    <Link to={`/profile/${item.ownerId}`} className='flex justify-center items-center gap-x-2'>
                        <BiUserCircle className='text-blue-500 text-2xl' />
                        <p className='text-gray-700'>{item.ownerName}</p>
                    </Link>      
                    <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                        <Link to={`/travel/details/${item._id}`}>
                            <BsInfoSquare className='text-2xl text-green-800 hover:text-black' />
                        </Link>
                        <Link to={`/travel/edit/${item._id}`}>
                            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LocationCard;

{/* <div className='flex justify-between items-center mt-4'>
<Link to={`/locations/${item._id}`} className='text-blue-500 hover:text-blue-700'>
    <AiOutlineEdit className='text-yellow-500 hover:text-yellow-700' />
</Link> */}