import React from 'react'

const LoadingCircle = () => {
  return (
    <svg className='loading-svg' viewBox="25 25 50 50">
        <circle className='loading-circle' r="20" cy="50" cx="50"></circle>
    </svg>
  )
};

export default LoadingCircle;