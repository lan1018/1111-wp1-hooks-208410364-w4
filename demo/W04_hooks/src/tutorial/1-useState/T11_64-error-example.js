import React from 'react';

const ErrorExample = () => {
  let title = 'random title'
  const handleClick = () => {
    title = 'Hello word';
    console.log('title', title);
  }
  return (
    <>
       <h2>{title}</h2>
       <button type='button' className='btn' onClick={handleClick}>
        change title
       </button>
    </>
  );
};

export default ErrorExample;
