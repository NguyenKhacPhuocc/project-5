/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaPlay, FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa6";

export const SongItem2 = (props: any) => {

  const { item } = props;
  return (
    <>
      <div className=" mt-[20px] flex items-center justify-between bg-bg2 py-[5px] px-[18px] rounded-[15px]">
        <div className="flex gap-[12px]">
          <button className="text-[#ffffff] text-[24px] hover:text-primary transition-colors duration-200">
            <FaPlay />
          </button>
          <Link href={item.link} className="flex items-center gap-[12px]">
            <div className="h-[45px] w-[45px] rounded-[8px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-200 hover:scale-[120%]"
              />
            </div>
            <div className="font-[700] text-[14px] leading-[17px] text-[#ffffff] hover:text-primary transition-colors duration-200 ">
              {item.title}
            </div>
          </Link>
        </div>
        <div className="flex w-[45%] justify-between line-clamp-1 gap-[40px]">
          <div className="font-[400] text-[14px] leading-[17px] text-[#ffffff]">
            {item.singer}
          </div>
          <div className="flex gap-[18px] items-center">
            <div className="font-[400] text-[14px] leading-[17px] text-[#ffffff]">
              {item.time}
            </div>
            <button className={"font-[400] text-[20px] leading-[17px] " + (item.wishlist ? "text-primary" : "text-[#ffffff] hover:text-primary")}>
              {item.wishlist ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}