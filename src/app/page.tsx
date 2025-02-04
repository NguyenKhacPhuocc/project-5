/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { SongSection1 } from "./components/SongSection1/SongSection1";
import { Section2HomePage } from "./components/Section2HomePage/Section2HomePage";
import { Section3HomePage } from "./components/Section3HomePage/Section3HomePage";

export const metadata: Metadata = {
  title: "MuseStream",
  description: "Project nghe nhạc trực tuyến",
};

export default function Home() {

  return (
    <>

      <section className="flex gap-[20px] mb-[30px]">
        <div className="w-[534px]">
          <div
            className="w-full flex items-center bg-cover rounded-[15px]"
            style={{ backgroundImage: "url('/demo/bg-home-1.png' " }}
          >
            <div className="ml-[30px] flex-1 mr-[34px]">
              <h3 className="font-[700] text-[32px] text-[#ffffff]  mb-[6px]">
                Nhạc EDM
              </h3>
              <div className="font-[500] text-[14px] text-[#ffffff] ">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="w-[215px] mt-[40px] mr-[24px]">
              <img
                src="/demo/bg-home-2.png"
                alt="background 2"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <SongSection1 />
      </section>

      <Section2HomePage />

      <Section3HomePage />
    </>
  );
}
