import React, { useState, useEffect } from "react";

export function ProperUseEffectSyncLocalStorage() {
  const [name, setName] = useState(() => {
    // Retrieve the initial value from localStorage
    return localStorage.getItem("name") || "";
  });

  // useEffect to save the name to localStorage whenever it changes
  // ✅ This is a common use case where useEffect is necessary to keep the component state in 
  // sync with an external system.
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]); // Dependency array ensures this effect runs only when 'name' changes

  return (
    <div>
      <h2>Synchronize with LocalStorage</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Your name is: {name}</p>
    </div>
  );
}