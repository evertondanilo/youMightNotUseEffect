import React, { useState, useEffect } from "react";

type APIError = {
  message: string;
};

export const ProperUseEffectExternalAPI = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<APIError | null>(null);

  // useEffect to fetch data from an external API when the component mounts
  // ✅ Use useEffect to synchronize your component with external systems like APIs, network requests, or browser DOM.
  useEffect(() => {
    fetch('https://dummyjson.com/users/1?delay=1000')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError({ message: error.message }));
  }, []); // Empty dependency array means this effect runs only once after the initial render

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Data from API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
