import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("");

  const fakeApiCall = () => Promise.resolve("Success!");

  const onClickHandler = () => {
    fakeApiCall().then(res => setMessage(res));
  };

  return (
    <div>
      <span>{message}</span>
      <button onClick={onClickHandler}>Get message!</button>
    </div>
  );
};

export default Message;
