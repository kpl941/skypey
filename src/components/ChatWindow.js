import React from "react";
const ChatWindow = ({ activateUserId }) => {
  return (
    <div className="ChatWindow">Conversation for user id:
      {activateUserId}</div>
  ); 
};
export default ChatWindow;