/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { BsFillSkipEndFill, BsFillSkipStartFill } from "react-icons/bs"
import { FaPause, FaPlay } from "react-icons/fa"

export const PlaySwitch = () => {



  const handlePlay = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementPlay = elementPlayAudio.querySelector(".button-switch-state");
    const elementAudio: any = elementPlayAudio?.querySelector('.inner-audio');
    if (elementPlay.classList.contains("play")) {
      elementPlay.classList.remove("play");
      elementAudio.pause();
    } else {
      elementPlay.classList.add("play");
      elementAudio.play();
    }

  }

  return (
    <>
      <div className="flex gap-[42px] items-center justify-center">
        <button className="text-[22px]  text-white hover:bg-primary rounded-[50%] p-[2px] transition-colors duration-100" >
          <BsFillSkipStartFill />
        </button>
        <button className="text-[19px] text-white w-[38px] aspect-square bg-primary rounded-[50%] flex justify-center items-center hover:text-[22px] button-switch-state duration-100" onClick={handlePlay}>
          <FaPlay className="button-play" />
          <FaPause className="button-pause" />
        </button>
        <button className="text-[22px]  text-white hover:bg-primary rounded-[50%] p-[2px] transition-colors duration-100" >
          <BsFillSkipEndFill />
        </button>
      </div>

    </>
  )
}