import React from 'react';

const Card = ({ name }) => {
  return (
    <div className="card">
      <img src={`/${name}`} width={200} height={200}/>
    </div>
  );
};

export default Card;
