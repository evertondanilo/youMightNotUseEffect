import React, { useState, useEffect } from "react";

export const ProfileBad = ({ userId }: { userId: number }) => {
  const [comment, setComment] = useState("");

  // 🔴 Avoid: Resetting state on prop change in an Effect
  // In this version, the useEffect hook is used to reset the comment state whenever the userId prop changes.
  // This approach is inefficient because the component will first render with the stale value and then render
  // again with the reset state. This can lead to unnecessary re-renders and complexity, especially if
  // there are nested components with their own state that also need to be reset
  // https://react.dev/learn/you-might-not-need-an-effect#resetting-all-state-when-a-prop-changes
  useEffect(() => {
    setComment("");
  }, [userId]);

  return (
    <div>
      <h2>**Bad: Profile of User {userId}</h2>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment"
      />
    </div>
  );
};
