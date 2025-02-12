import React, { useState } from "react";

// ✅ This and any other state below will reset on key change automatically
// The key is set in the consumer component
// https://react.dev/learn/you-might-not-need-an-effect#resetting-all-state-when-a-prop-changes
export const ProfileGood = ({ userId }: { userId: number }) => {
  const [comment, setComment] = useState("");

  return (
    <div>
      <h2>**Good: Profile of User {userId}</h2>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment"
      />
    </div>
  );
};
