import React from "react";


export default function Timer({
	stage,
	switchStage,
	getTickingTime,
	seconds,
	ticking,
	startTimer,
	isTimeUp,
	muteAlarm,
	reset,
}) {
	const options = ["Pomodoro", "Short Break", "Long Break"];
	return (
		<div className="w-10/12 mx-auto pt-5 text-black flex flex-col justify-center items-center mt-10">
			<div className="flex gap-5 items-center">
				{options.map((option, index) => {
					return (
						<h1
							key={index}
							className={` ${
								index === stage ? "bg-[#81c0c5] bg-opacity-40" : ""
							}  p-2 px-4 cursor-pointer transition-all duration-300 rounded`}
							onClick={() => switchStage(index)}
						>
							{option}
						</h1>
					);
				})}
			</div>
			<div className="mt-10 mb-10">
				<h1 className="text-8xl font-bold select-none m-0">
					{getTickingTime()}:{seconds.toString().padStart(2, "0")}
				</h1>
			</div>
			<div className="flex gap-2 items-center">
				<button
					className="px-16 py-2 text-2xl rounded-md bg-[#fdd85d] text-[#011c27] uppercase font-bold"
					onClick={startTimer}
				>
					{ticking ? "Stop" : "Start"}
				</button>
				{isTimeUp && (
					<button
						className="text-3xl text-[#011c27] cursor-pointer"
						onClick={muteAlarm}
					/>
				)}
			</div>
			{ticking && (
				<button className="text-[#011c27] underline underline-offset-2 decoration-[#00828f] mt-5" onClick={reset}>
					Reset
				</button>
			)}
		</div>
	);
}