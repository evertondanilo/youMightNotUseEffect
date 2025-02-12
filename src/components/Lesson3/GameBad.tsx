import React, { useState, useEffect } from "react";

interface Card {
  gold: boolean;
}

export const GameBad = () => {
  const [card, setCard] = useState<Card | null>(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  // Sometimes you might feel tempted to chain Effects that each adjust a piece of state based on other state:
  // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
  // https://react.dev/learn/you-might-not-need-an-effect#chains-of-computations
  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount((c) => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 2) {
      setRound((r) => r + 1);
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 3) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    if (isGameOver) {
      alert("Good game!");
    }
  }, [isGameOver]);

  function handlePlaceCard(nextCard: Card) {
    if (isGameOver) {
      throw Error("Game already ended.");
    } else {
      setCard(nextCard);
    }
  }

  return (
    <div>
      <h2>Game (Bad)</h2>
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
};
