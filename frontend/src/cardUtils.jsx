// Draws a card between 1 and 13 inclusive and returns the card value
function drawCard() {
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
  function printCardName(cardRank) {
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
  
  export { drawCard, printCardName };
  