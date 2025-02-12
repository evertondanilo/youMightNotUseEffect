import React, { useState } from "react";

export const AvoidUnnecessaryWatchersGood = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  // ✅ Avoid using useEffect to watch for state changes
  // Instead, calculate the next state directly in the event handler
  function handleIncrement() {
    const nextCount = count + 1;
    setCount(nextCount);
    setIsEven(nextCount % 2 === 0);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>{isEven ? "Even" : "Odd"}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
