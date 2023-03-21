
// TODO: create variable to select all cards on your html

// TODO: create variables, one to check state of card 
// (flipped = true or flipped = false)
// create variables for each of the cards you'll be comparing



// TODO: use forEach to loop through all of cards 
// and use call back function to flip over cards


//TODO:Create function to flip card to check card value

//TODO:create function that checks wether the match was a success or fail

//TODO:  create success function 


 //TODO: create fail function 

//TODO: create function to reset state of cards


//TODO:  create function to shuffle cards

const cards = [
    { id: 1, symbol: '🐶', flipped: false },
    { id: 2, symbol: '🐶', flipped: false },
    { id: 3, symbol: '🐱', flipped: false },
    { id: 4, symbol: '🐱', flipped: false }
  ];
  
  let flippedCards = [];
  let matches = 0;
  
  const isMatch = (card1, card2) => card1.symbol === card2.symbol;
  
  const flipCard = (id) => {
    const cardIndex = cards.findIndex(card => card.id === id);
    cards[cardIndex].flipped = true;
    flippedCards.push(cards[cardIndex]);
  
    if (flippedCards.length === 2) {
      if (isMatch(flippedCards[0], flippedCards[1])) {
        matches++;
      }
      flippedCards = [];
    }
  };