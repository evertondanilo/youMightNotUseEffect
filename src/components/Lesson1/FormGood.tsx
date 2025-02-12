import React, { useState } from "react";

export const FormGood = () => {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  // ✅ Good: calculated during rendering
  // https://react.dev/learn/you-might-not-need-an-effect#chains-of-computations
  const fullName = `${firstName} ${lastName}`;

  console.log("rendering");
  return (
    <div>
      FormGood
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
};
