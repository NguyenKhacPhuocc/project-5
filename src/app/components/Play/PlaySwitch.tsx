/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { BsFillSkipEndFill, BsFillSkipStartFill } from "react-icons/bs"
import { FaPause, FaPlay } from "react-icons/fa"
import { TbRepeat, TbRepeatOnce } from "react-icons/tb";
import { MdOutlineLyrics } from "react-icons/md";
import Link from "next/link";
// import { useEffect, useState } from "react";

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


  const handleNext = () => {
    const currentSong = document.querySelector("[song-id].activeSong");
    if (currentSong) {
      const nextSong = currentSong.nextElementSibling;
      if (nextSong) {
        const buttonPlay: any = nextSong.querySelector(".inner-button-play");
        buttonPlay.click();
      }

    }
  }

  const handleBack = () => {
    const currentSong = document.querySelector("[song-id].activeSong");
    if (currentSong) {
      const nextSong = currentSong.previousElementSibling
      if (nextSong) {
        const buttonPlay: any = nextSong.querySelector(".inner-button-play");
        buttonPlay.click();
      }

    }
  }
  // const [hreff, setHreff] = useState("/songs/1");
  // useEffect(() => {
  //   const ButtonShowLyric = document.querySelector(".button-show-lyric");
  //   // ButtonShowLyric.click();
  // }, [hreff])

  // const handleClick = (event: any) => {
  //   console.log(event.href);
  //   setHreff(event.href);
  // }

  const handleRepeat = () => {
    const elementRepeatAudio: any = document.querySelector(".play-audio");
    const elementRepeat = elementRepeatAudio.querySelector(".button-switch-repeat");
    const elementAudio: any = elementRepeatAudio?.querySelector('.inner-audio');
    if (elementRepeat.classList.contains("repeat")) {
      elementRepeat.classList.remove("repeat");
      elementAudio.loop = !elementAudio.loop;
    } else {
      elementRepeat.classList.add("repeat");
      elementAudio.loop = !elementAudio.loop;
    }
  }

  return (
    <>
      <div className="flex gap-[42px] items-center justify-center">
        <Link
          href={""}
          className="text-[20px]  text-white hover:bg-primary rounded-[50%] p-[4px] transition-colors duration-100 button-show-lyric"
          // onClick={handleClick}
        >
          <MdOutlineLyrics />
        </Link>
        <button
          className="text-[22px]  text-white hover:bg-primary rounded-[50%] p-[2px] transition-colors duration-100"
          onClick={handleBack}
        >
          <BsFillSkipStartFill />
        </button>
        <button
          className="text-[19px] text-white w-[38px] aspect-square bg-primary rounded-[50%] flex justify-center items-center hover:text-[22px] button-switch-state duration-100"
          onClick={handlePlay}>
          <FaPlay className="button-play" />
          <FaPause className="button-pause" />
        </button>
        <button
          className="text-[22px]  text-white hover:bg-primary rounded-[50%] p-[2px] transition-colors duration-100"
          onClick={handleNext}>
          <BsFillSkipEndFill />
        </button>
        <button
          className="text-[22px]  text-white hover:bg-primary rounded-[50%] p-[2px] transition-colors duration-100 button-switch-repeat"
          onClick={handleRepeat}
        >
          <TbRepeat className="button-repeat" />
          <TbRepeatOnce className="button-unrepeat" />
        </button>
      </div>

    </>
  )
}