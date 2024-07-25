import React from 'react';

const Card = ({ name }) => {
  // Handle undefined rank and provide default value
//   const cardRank = rank || 0; // Default to 0 if rank is undefined

//   // Determine the card name based on rank
//   const cardName = (() => {
//     switch (cardRank) {
//       case 1:
//         return 'Ace';
//       case 11:
//         return 'Jack';
//       case 12:
//         return 'Queen';
//       case 13:
//         return 'King';
//       default:
//         return cardRank.toString();
//     }
//   })();
  return (
    <div className="card">
      <img src={`public/${name}`} width={200} height={200}/>
    </div>
  );
};

export default Card;
