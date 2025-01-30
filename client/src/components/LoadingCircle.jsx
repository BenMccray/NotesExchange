import React from 'react'
import "../styles/Loading.css"

const LoadingCircle = () => {
  return (
    <div className='loading-container'>
      <svg className='loading-svg' viewBox="25 25 50 50">
        <circle className='loading-circle' r="20" cy="50" cx="50"></circle>
      </svg>
      </div>
  )
};

export default LoadingCircle;