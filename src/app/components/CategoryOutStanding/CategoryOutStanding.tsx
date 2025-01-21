/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const CategoryOutStanding = (props: { item: any }) => {
  const { item } = props;
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <Link href={item.link} className="w-[180px] aspect-[1/1] overflow-hidden  rounded-[15px] ">
          <img
            src={item.image} alt={item.title}
            className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-[120%]"
          />
        </Link>
        <Link href={item.link} className="font-[700] text-[14px] leading-[18px] text-[#ffffff] hover:text-primary transition-colors duration-200">
          {item.title}
        </Link>
        <div className="font-[400] text-[12px] leading-[15px] text-[#FFFFFF80] line-clamp-1">
          {item.description}
        </div>
      </div>
    </>
  )
}