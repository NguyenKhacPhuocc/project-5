/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const SongItemSearch = (props: any) => {

  const { item } = props;
  return (
    <>
      <div className=" mt-[10px] flex items-center justify-between bg-bg2 py-[5px] px-[10px] rounded-[15px]">
        <Link href={item.link} className="flex items-center gap-[12px]">
          <div className="h-[50px] w-[50px] rounded-[8px] overflow-hidden">
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
        <div className="flex line-clamp-1">
          <div className="font-[400] text-[14px] leading-[17px] text-[#ffffff]">
            {item.singer}
          </div>
          {/* <div className="flex gap-[18px] items-center">
            <div className="font-[400] text-[14px] leading-[17px] text-[#ffffff]">
              {item.time}
            </div>
            <button className={"font-[400] text-[20px] leading-[17px] " + (item.wishlist ? "text-primary" : "text-[#ffffff] hover:text-primary")}>
              {item.wishlist ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}