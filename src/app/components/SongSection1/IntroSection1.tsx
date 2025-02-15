/* eslint-disable @next/next/no-img-element */
"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";


export const IntroSection1 = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper rounded-[8px] overflow-hidden"
        loop={true}  // Lặp lại các slide
        autoplay={{
          delay: 2000,  // Thời gian giữa các slide
          disableOnInteraction: false,  // Tiếp tục autoplay ngay cả khi người dùng tương tác
        }}
        speed={1000}
      >
        <SwiperSlide>
          <div className="lg:w-[534px] md:w-[53%]">
            <div
              className="w-full flex items-center bg-cover rounded-[15px]"
              style={{ backgroundImage: "url('/demo/bg-home-1.png' " }}
            >
              <div className="ml-[30px] flex-1 xl:mr-[34px] lg:mr-[25px]">
                <h3 className="font-[700] xl:text-[32px] lg:text-[26px] md:text-[24px] text-[#ffffff]  mb-[6px]">
                  Nhạc EDM
                </h3>
                <div className="font-[500] xl:text-[14px]  md:text-[11px] lg:text-[12px] text-[#ffffff] ">
                  Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
                </div>
              </div>
              <div className="xl:w-[215px] md:w-[160px] xl:mt-[40px] xl:mr-[24px] lg:mt-[60px] lg:mr-[20px] md:mt-[40px] md:mr-[15px] ">
                <img
                  src="/demo/bg-home-2.png"
                  alt="background 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:w-[534px] md:w-[53%]">
            <div
              className="w-full flex items-center bg-cover rounded-[15px]"
              style={{ backgroundImage: "url('/demo/bg-home-1.png' " }}
            >
              <div className="ml-[30px] flex-1 xl:mr-[34px] lg:mr-[25px]">
                <h3 className="font-[700] xl:text-[32px] lg:text-[26px] md:text-[24px] text-[#ffffff]  mb-[6px]">
                  Nhạc EDM
                </h3>
                <div className="font-[500] xl:text-[14px]  md:text-[11px] lg:text-[12px] text-[#ffffff] ">
                  Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
                </div>
              </div>
              <div className="xl:w-[215px] md:w-[160px] xl:mt-[40px] xl:mr-[24px] lg:mt-[60px] lg:mr-[20px] md:mt-[40px] md:mr-[15px] ">
                <img
                  src="/demo/bg-home-2.png"
                  alt="background 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:w-[534px] md:w-[53%]">
            <div
              className="w-full flex items-center bg-cover rounded-[15px]"
              style={{ backgroundImage: "url('/demo/bg-home-1.png' " }}
            >
              <div className="ml-[30px] flex-1 xl:mr-[34px] lg:mr-[25px]">
                <h3 className="font-[700] xl:text-[32px] lg:text-[26px] md:text-[24px] text-[#ffffff]  mb-[6px]">
                  Nhạc EDM
                </h3>
                <div className="font-[500] xl:text-[14px]  md:text-[11px] lg:text-[12px] text-[#ffffff] ">
                  Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
                </div>
              </div>
              <div className="xl:w-[215px] md:w-[160px] xl:mt-[40px] xl:mr-[24px] lg:mt-[60px] lg:mr-[20px] md:mt-[40px] md:mr-[15px] ">
                <img
                  src="/demo/bg-home-2.png"
                  alt="background 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}