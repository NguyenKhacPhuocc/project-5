/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { ButtonPlay } from "../Buttons/ButtonPlay";


export const SongItem = (props: { item: any }) => {
  const { item } = props;

  // const handlePlay = () => {

  // }
  return (
    <>
      <div className="flex bg-bg2 p-[10px] rounded-[15px] justify-between items-center">
        <div className="flex items-center">
          <Link href={item.link} className="mr-[10px] w-[76px] h-[76px] rounded-[10px] truncate flex justify-center items-center">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-[120%]" />

          </Link>
          <div className="">
            <Link href={item.link} className="font-[600] text-white text-[16px] leading-[19px] hover:text-primary transition-colors duration-300">
              {item.title}
            </Link>
            <div className="font-[400] text-[#FFFFFF80] text-[12px] leading-[15px] mt-[5px]">
              {item.singer}
            </div>
            <div className="font-[400] text-[#FFFFFF] text-[12px] leading-[15px] mt-[8px]">
              {item.listen} lượt nghe
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] ">
          <ButtonPlay item={item} />
          <button
            className="text-[15px] text-white w-[34px] h-[34px]  rounded-full flex justify-center items-center border border-white hover:text-primary hover:border-primary transition-colors duration-200"
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
    </>
  )
}