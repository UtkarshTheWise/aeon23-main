"use client";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import ChatPage from "@/components/Page";
import Sidenav from "@/components/Sidenav";

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [userName, setUserName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [roomId, setroomId] = useState("");

  const [socket, setSocket] = useState(null)
  useEffect(() => {
    const newSocket = io('http://localhost:3001')
    setSocket(newSocket)
  
    return socket?.disconnect()
  }, [])

  const handleJoin = () => {
    if (userName !== "" && roomId !== "") {
      console.log(userName, "userName", roomId, "roomId");
      socket.emit("join_room", roomId);
      setShowSpinner(true);
// You can remove this setTimeout and add your own logic
      setTimeout(() => {
        setShowChat(true);
        setShowSpinner(false);
      }, 4000);
    } else {
      alert("Please fill in Username and Room Id");
    }
  };

  return (
		<>
      <Sidenav />
      <div className="ml-24 p-12">
      <div
        
        style={{ display: showChat ? "none" : "" }}
        className="space-x-4"
      >
        <input
          
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          disabled={showSpinner}
          className="p-2 px-4 bg-gray-100 rounded-lg border-2 border-black/10 focus:border-[#81c0c5] transition-all duration-300"
        />
        <input
          type="text"
          placeholder="Room Id"
          onChange={(e) => setroomId(e.target.value)}
          disabled={showSpinner}
          className="p-2 px-4 bg-gray-100 rounded-lg border-2 border-black/10 focus:border-[#81c0c5] transition-all duration-300"
        />
        <button onClick={() => handleJoin()}
          className="p-2 px-4 bg-[#004B62] text-white rounded-lg">
          {!showSpinner ? (
            "Join"
          ) : (
            "Loading..."
          )}
        </button>
      </div>
      <div style={{ display: !showChat ? "none" : "" }}>
        <ChatPage socket={socket} roomId={roomId} username={userName} />
      </div>
      </div>
    </>
  );
}