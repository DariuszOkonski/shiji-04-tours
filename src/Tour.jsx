import React from 'react';

const Tour = ({ id, name, info, image, price }) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
    </article>
  );
};

export default Tour;
