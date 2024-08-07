import React, { useState } from 'react';
import Hand from './Hand';
import Button from './Button';
import './App.css';

const App = () => {
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerTotal, setPlayerTotal] = useState(0);
  const [dealerTotal, setDealerTotal] = useState(0);
  const [gameStatus, setGameStatus] = useState('');

  const startGame = () => {
    setPlayerHand([]);
    setDealerHand([]);
    setPlayerTotal(0);
    setDealerTotal(0);
    setGameStatus('');
  };

  const drawCard = () => {
    const cardRank = Math.floor(Math.random() * 13) + 1;
    const suits = ['spades', 'hearts', 'diamonds', 'clubs'];

    const getRandomSuit = () => {
        const randomIndex = Math.floor(Math.random() * suits.length);
        return suits[randomIndex];
      };
    
    const cardType = getRandomSuit();
    let cardValue = cardRank;
  
    if (cardRank === 11 || cardRank === 12 || cardRank === 13) {
      cardValue = 10;
    } else if (cardRank === 1) {
      cardValue = 11;
    }

    let cardName = printCardName(cardRank)

    const finalCard = cardName + "_of_" + cardType + ".png"
    const card = {val: cardValue, name: finalCard}
    
    return card;
  }
  
  // Prints the card name based on the card rank
  const  printCardName = (cardRank) => {
    let cardName = '';
  
    switch (cardRank) {
      case 1:
        cardName = 'ace';
        break;
      case 11:
        cardName = 'jack';
        break;
      case 12:
        cardName = 'queen';
        break;
      case 13:
        cardName = 'king';
        break;
      default:
        cardName = cardRank.toString();
    }

    return cardName
  }

  const handleHit = () => {

    let newTotal
    if (playerTotal === 0){
      const card1   = drawCard();
      const card2 = drawCard();
      setPlayerHand(prevHand => [...prevHand, card1.name, card2.name]);
    
      newTotal = playerTotal + card1.val + card2.val;
      setPlayerTotal(newTotal);

    } else {
      const card1   = drawCard();
      setPlayerHand(prevHand => [...prevHand, card1.name]);
    
      newTotal = playerTotal + card1.val;
      setPlayerTotal(newTotal);
    }
    

    if (newTotal > 21) {
      setGameStatus('BUST');
    }
  };

  const handleStand = () => {
    let dealerHandTemp = [];
    let dealerTotal = 0;
  
    // Draw cards for the dealer until the total is at least 17
    while (dealerTotal < 17) {
      const newCard = drawCard();
      dealerTotal += newCard.val;
      dealerHandTemp.push(newCard.name);
    }
  
    // Update state with dealer's final hand and total
    setDealerHand(dealerHandTemp);
    setDealerTotal(dealerTotal);
  
    // Determine the winner
    const result = getGameResult(playerTotal, dealerTotal);
    setGameStatus(result);
  };
  

  const getGameResult = (userHand, dealerHand) => {
    if (userHand > 21) return 'Dealer wins!';
    if (userHand === 21 && dealerHand === 21) return 'Push.';
    if (userHand === 21) return 'You win!';
    if (dealerHand > 21) return 'You win!';
    if (userHand === dealerHand) return 'Push.';
    if (userHand > dealerHand) return 'You win!';
    return 'Dealer wins!';
  };

  return (
    <div className="game">
      <h1>Blackjack</h1>
      <div className="hands">
        <div className="player-hand">
          <h2>Player's Hand</h2>
          <Hand cards={playerHand} />
          <p>Total: {playerTotal}</p>
        </div>
        <div className="dealer-hand">
          <h2>Dealer's Hand</h2>
          <Hand cards={dealerHand} />
          <p>Total: {dealerTotal}</p>
        </div>
      </div>
      <div className="controls">
        {gameStatus === '' ? (
          <>
            <Button onClick={handleHit} text="Hit" />
            <Button onClick={handleStand} text="Stand" />
            <Button onClick={startGame} text="Restart" />
          </>
        ) : (
          <>
            <p>{gameStatus}</p>
            <Button onClick={startGame} text="Restart" />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
