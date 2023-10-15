"use client"
import React, { useEffect, useState } from "react";



const ChatPage = ({ socket, username, roomId }) => {
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState([]);

  const sendData = async (e) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData = {
        roomId,
        user: username,
        msg: currentMsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket?.emit("send_msg", msgData);
      setChat((prev) => [...prev, msgData]);
      setCurrentMsg("");
    }
  };


  useEffect(() => {
    socket?.on("receive_msg", (data) => {
      setChat((pre) => [...pre, data]);
    });
  }, [socket]);


  return (
    <div >
      <div >
        <div style={{ marginBottom: "1rem" }}>
          <p>
            Name: <b>{username}</b> and Room Id: <b>{roomId}</b>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {chat.map(({ roomId, user, msg, time }, key) => (
            <div
              key={key}
              className="w-max bg-gray-100 px-4 p-2 rounded-lg"
              style={{ alignSelf: user == username ? "end" : "start" }}
            >
              <span
                className="text-xs"
              >
                {user}
              </span>
              <p>
                {msg}
              </p>
            </div>
          ))}
        </div>
        <form onSubmit={(e) => sendData(e)} className="flex py-4 gap-4 justify-end">
          <input
            
            type="text"
            value={currentMsg}
            placeholder="Type your message.."
            onChange={(e) => setCurrentMsg(e.target.value)}
            className="w-full border-2 border-black/10 bg-gray-100 transition-all rounded-lg duration-300 focus:border-[#81c0c5] p-2 px-4"
          />
          <button className="p-2 px-4 bg-[#004B62] text-white rounded-lg">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;