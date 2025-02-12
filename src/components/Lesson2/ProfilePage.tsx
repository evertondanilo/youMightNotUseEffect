import React, { useState } from "react";
import { ProfileGood } from "./ProfileGood";
import { ProfileBad } from "./ProfileBad";

export const ProfilePage = () => {
  const [userId, setUserId] = useState(1);

  return (
    <>
      <h1>ProfileBad</h1>
      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <ProfileBad userId={userId} />

      {/* <h1>ProfileGood</h1>
      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <ProfileGood key={userId} userId={userId} /> */}
    </>
  );
};
