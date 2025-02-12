import React, { useState, useEffect } from "react";

export const AvoidUnnecessaryWatchersBad = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  // 🔴 Avoid: Using useEffect to watch for state changes
  useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [count]); // This effect runs every time 'count' changes

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>{isEven ? "Even" : "Odd"}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
