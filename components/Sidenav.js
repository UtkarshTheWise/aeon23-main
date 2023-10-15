import React from 'react'
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faUsers, faMessage, faRightFromBracket, faClipboardList, faHourglassStart, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Sidenav() {
  const [collapsed, setSidebarCollapsed] = useState(true);
  return (
    <>
    <nav className={classNames({
        "bg-[#f2eeed] fixed h-screen flex flex-col transition-all duration-300 ease-in-out justify-between p-8 tracking-tight w-72 z-20": true,
        "translate-x-0 shadow-lg": !collapsed,
        "-translate-x-[calc(100%-6rem)] shadow-none": collapsed,
        })}>
        <div className="flex justify-between items-center transition-all">
            <span className="whitespace-nowrap">Daisy</span>
            <button onClick={() => setSidebarCollapsed((prev) => !(prev))}>
                <FontAwesomeIcon className="h-4 w-8 py-2 transition-all duration-300 hover:bg-[#81c0c5] rounded-xl" icon={faBars} />
            </button>
        </div>
        <ul className="grid gap-10 transition-all">
            <a className="flex justify-between items-center group" href="/">
                <span className="whitespace-nowrap transition-all duration-300 underline underline-offset-2 decoration-transparent group-hover:decoration-[#00828F]">Home</span>
                <FontAwesomeIcon className="h-4 w-8 py-2 transition-all duration-300 group-hover:bg-[#81c0c5] rounded-xl" icon={faHouse} /> 
            </a>
            <a className="flex justify-between items-center group" href="/family">
                <span className="whitespace-nowrap transition-all duration-300 underline underline-offset-2 decoration-transparent group-hover:decoration-[#00828F]">Family</span>
                <FontAwesomeIcon className="h-4 w-8 py-2 transition-all duration-300 group-hover:bg-[#81c0c5] rounded-xl" icon={faUsers} /> 
            </a>
            <a className="flex justify-between items-center group" href="/pomodoro">
                <span className="whitespace-nowrap transition-all duration-300 underline underline-offset-2 decoration-transparent group-hover:decoration-[#00828F]">Pomodoro</span>
                <FontAwesomeIcon className="h-4 w-8 py-2 transition-all duration-300 group-hover:bg-[#81c0c5] rounded-xl" icon={faHourglassStart} /> 
            </a>
            <a className="flex justify-between items-center group" href="/chat">
                <span className="whitespace-nowrap transition-all duration-300 underline underline-offset-2 decoration-transparent group-hover:decoration-[#00828F]">Chatroom</span>
                <FontAwesomeIcon className="h-4 w-8 py-2 transition-all duration-300 group-hover:bg-[#81c0c5] rounded-xl" icon={faMessage} /> 
            </a>
            <a className="flex justify-between items-center group" href="/todo">
                <span className="whitespace-nowrap transition-all duration-300 underline underline-offset-2 decoration-transparent group-hover:decoration-[#00828F]">To-do List</span>
                <FontAwesomeIcon className="h-4 w-8 py-2 transition-all duration-300 group-hover:bg-[#81c0c5] rounded-xl" icon={faClipboardList} /> 
            </a>
            <a className="flex justify-between items-center group" href="/eco">
                <span className="whitespace-nowrap transition-all duration-300 underline underline-offset-2 decoration-transparent group-hover:decoration-[#00828F]">Economy</span>
                <FontAwesomeIcon className="h-4 w-8 py-2 transition-all duration-300 group-hover:bg-[#81c0c5] rounded-xl" icon={faMoneyCheckDollar} /> 
            </a>
        </ul>
        <a className="flex justify-between items-center group" href="/logout">
            <span className="whitespace-nowrap transition-all duration-300 underline underline-offset-2 decoration-transparent group-hover:decoration-[#00828F]">Logout</span>
            <FontAwesomeIcon className="h-4 w-8 py-2 transition-all duration-300 group-hover:bg-[#81c0c5] rounded-xl" icon={faRightFromBracket} />
        </a>
      </nav>
      {!collapsed && <div className='absolute inset-x-0 inset-y-0 backdrop-blur-sm z-10'></div>}
      </>
  )
}
