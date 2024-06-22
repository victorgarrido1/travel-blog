import React from 'react';

const GridContainer = ({ children }) => {
  return (
    <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-6'>
      {children}
    </div>
  )
}

export default GridContainer;