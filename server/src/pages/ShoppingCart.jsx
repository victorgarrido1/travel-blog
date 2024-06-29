import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';


const ShoppingCart = ({ cart }) => {
    return (
        <button className='bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded flex items-center justify-center relative'
        >
            <FaShoppingCart size={23} />
            {cart.length > 0 && (
                <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex item-center justify-center'>
                    {cart.length}
                </span>
            )}
        </button>
    )
}

export default ShoppingCart;