/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FaPlay } from "react-icons/fa";

export const ButtonPlay = (props: any) => {

  const { item, className } = props;
  const handlePlay = () => {
    // phát nhạc
    const audio = item.audio;
    const elementPlayAudio = document.querySelector(".play-audio");
    const elementPlay: any = elementPlayAudio?.querySelector(".button-switch-state");
    const elementAudio: any = elementPlayAudio?.querySelector('.inner-audio');
    const elementSource = elementAudio?.querySelector('source');
    if (elementSource) {
      elementSource.src = audio;
    }
    if (elementAudio) {
      elementAudio.load();
      elementAudio.play();
    }
    // phát nhạc


    // hiển thị khối play
    elementPlayAudio?.classList.remove('hidden');
    // hiển thị ảnh
    const innerImage: any = elementPlayAudio?.querySelector(".inner-image");
    if (innerImage) {
      innerImage.src = `${item.image}`
    }
    //hiển thị tên bài hát
    const innerTitle: any = elementPlayAudio?.querySelector(".inner-title");
    if (innerTitle) {
      innerTitle.innerHTML = `${item.title}`
    }
    //hiển thị tên ca sĩ
    const innerSinger: any = elementPlayAudio?.querySelector(".inner-singers");
    if (innerSinger) {
      innerSinger.innerHTML = `${item.singer}`
    }

    const PlayState = elementPlayAudio?.querySelector(".button-switch-state");
    PlayState?.classList.add("play");

    // lấy thời gian tổng của bài hát
    const elementPlayTimeCurrent: any = elementPlayAudio?.querySelector(".play-time .play-time-current");
    const elementPlayTimeShow: any = elementPlayAudio?.querySelector(".play-time .play-time-show");

    elementAudio.onloadedmetadata = () => {
      const totalTime = elementAudio.duration;
      elementPlayTimeShow.max = totalTime;

      // lấy ra thời gian hiện tại
      elementAudio.ontimeupdate = () => {
        const currentTime = elementAudio.currentTime;
        const percent = currentTime * 100 / totalTime;
        elementPlayTimeCurrent.style.width = `${percent}%`;
        elementPlayTimeShow.value = currentTime;
        if (percent === 100) {
          elementPlay.classList.remove("play");
          elementAudio.pause();
        }
      }
    }
    // xóa trạng thái play ở bài hát trước đó đang phát
    const elementSongOld = document.querySelector(`[song-id].activeSong`);
    if (elementSongOld) {
      elementSongOld.classList.remove("activeSong");
    }

    // thêm trạng thái play cho bài hát đang được bật
    const elementSong = document.querySelector(`[song-id = "${item.id}"]`);
    elementSong?.classList.add("activeSong");
  }

  return (
    <>
      <button
        className={className}
        onClick={handlePlay}
      >
        <FaPlay />
      </button>
    </>
  )
}