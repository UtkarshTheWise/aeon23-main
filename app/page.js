'use client';
import Sidenav from "@/components/Sidenav";
import { faMessage, faClipboard, faHourglass } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home() {

  return (
    <main className="flex min-h-screen flex-row">

      <Sidenav />

      <div className="ml-24 p-12 w-full space-y-12">

        <div className="flex flex-col w-full md:flex-row gap-12">

          <div className="flex flex-col md:flex-row gap-4 justify-between bg-gray-100 p-10 rounded-lg w-full">   
            <a className="flex-1 flex flex-col items-center gap-2 text-center" href="/pomodoro">
              <FontAwesomeIcon icon={faHourglass} className="w-24 h-12 text-[#011c27] bg-[#fdd85d] py-6 rounded-full" />
            <h1 className="text-xl font-bold tracking-tighter">Pomodoro Timer</h1>  
            </a>
            <a className="flex-1 flex flex-col items-center gap-2 text-center" href="/chat">
              <FontAwesomeIcon icon={faMessage} className="w-24 h-12 text-[#011c27] bg-[#fdd85d] py-6 rounded-full" />
            <h1 className="text-xl font-bold tracking-tighter">Chatroom</h1>  
            </a>
            <a className="flex-1 flex flex-col items-center gap-2 text-center" href="/todo">
              <FontAwesomeIcon icon={faClipboard} className="w-24 h-12 text-[#011c27] bg-[#fdd85d] py-6 rounded-full" />
            <h1 className="text-xl font-bold tracking-tighter">To-Do List</h1>  
            </a>
          </div> 
          <div className="flex flex-col gap-4 justify-between items-center bg-gray-100 p-10 rounded-lg w-full">
            <h3 className="font-semibold uppercase text-[#004b62]"> Your family code </h3>
            <h3 className="font-semibold text-3xl"> f2c30 </h3>
            <a href="/familyremove" className="p-1 px-4 rounded-full bg-[#fdd85d]">Leave Family <FontAwesomeIcon icon={faArrowRightFromBracket}/></a>
          </div>      

        </div>

          <div className="flex flex-col w-full md:flex-row gap-12">

            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-3xl font-bold tracking-tighter">Your Reminders</h1>  
              <div className="bg-gray-100 p-8 rounded-lg">

              </div>
            </div>        
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-3xl font-bold tracking-tighter">Your Tasks</h1>  
              <div className="bg-gray-100 p-8 rounded-lg">
                
              </div>
            </div>   

          </div>

      </div>

    </main>
  )
}