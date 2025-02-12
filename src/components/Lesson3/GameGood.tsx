import React, { useState } from "react";

interface Card {
  gold: boolean;
}

export const GameGood = () => {
  const [card, setCard] = useState<Card | null>(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);

  // ✅ Calculate what you can during rendering
  // https://react.dev/learn/you-might-not-need-an-effect#chains-of-computations
  const isGameOver = round > 3;

  function handlePlaceCard(nextCard: Card) {
    if (isGameOver) {
      throw Error("Game already ended.");
    }

    // ✅ Calculate all the next state in the event handler
    // https://react.dev/learn/you-might-not-need-an-effect#chains-of-computations
    setCard(nextCard);
    if (nextCard.gold) {
      if (goldCardCount < 2) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 3) {
          alert("Good game!");
        }
      }
    }
  }

  return (
    <div>
      <h2>Game (Good)</h2>
      <button onClick={() => handlePlaceCard({ gold: true })}>
        Place Gold Card
      </button>
      <button onClick={() => handlePlaceCard({ gold: false })}>
        Place Regular Card
      </button>
      <p>Round: {round}</p>
      <p>Gold Card Count: {goldCardCount}</p>
      <p>Game Over: {isGameOver ? "Yes" : "No"}</p>
    </div>
  );
}
