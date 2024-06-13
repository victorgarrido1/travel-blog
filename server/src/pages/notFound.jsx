import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
            <div className='flex-flex-col items-center justify-center min-h-screen bg-grey-100 dark:bg-gray-900 text-black dark:text-white'>
                <h1 className='flex flex-cetext-4xl font-bold mb-4'>Sorry, the page you are looking for cannot be found.</h1>
                <div>The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</div>
            </div>
    )
}


export default NotFound;
