"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const PlayTime = () => {

  const handleChange = (event: any) => {
    const elementPlayAudio = document.querySelector(".play-audio");
    const elementAudio: any = elementPlayAudio?.querySelector('.inner-audio');
    const elementShow = event.target;
    const value = parseFloat(elementShow.value);
    elementAudio.currentTime = value;

  }
  return (
    <>
      <div className="relative play-time">
        <div className="h-[5px] bg-primary rounded-[50px] absolute left-0 top-[13px] play-time-current"></div>
        <input
          type="range"
          min={0}
          max={0}
          defaultValue={0}
          className="w-full cursor-pointer appearance-none rounded-[50px] bg-[#ffffff0a]  h-[4px] range-sm play-time-show"
          onChange={handleChange}
          
        />
      </div>
    </>
  )
}