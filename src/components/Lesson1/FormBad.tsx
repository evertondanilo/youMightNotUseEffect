import React, { useState, useEffect } from "react";

export const FormBad= () => {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  // 🔴 Avoid: redundant state and unnecessary Effect
  // This approach is more complicated and inefficient because it introduces
  // redundant state and an unnecessary effect, leading to extra renders and potential bugs.
  // https://react.dev/learn/you-might-not-need-an-effect#chains-of-computations
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  console.log("rendering");
  return (
    <div>
      FormBad
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <p>Full Name: {fullName}</p>
    </div>
  );
}
