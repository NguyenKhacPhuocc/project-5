/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Title } from "./components/Title/Title";
// import { SongItem } from "./components/Song/SongItem";
import { CategoryOutStanding } from "./components/CategoryOutStanding/CategoryOutStanding";
import { dbFirebase } from "./firebaseConfig";
import { onValue, ref } from "firebase/database";
import { SongSection1 } from "./components/SongSection1/SongSection1";
import { Section2HomePage } from "./components/Section2HomePage/Section2HomePage";

export const metadata: Metadata = {
  title: "MuseStream",
  description: "Project nghe nhạc trực tuyến",
  icons: {
    icon: "demo/icon-logo.png"
  },
};


interface Category {
  id: string,
  image: string,
  title: string,
  description: string,
  link: string,
}



export default function Home() {

  // data section 2
  const data2: Category[] = []
  const categoryRef = ref(dbFirebase, 'categories');
  onValue(categoryRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      if (data2.length < 5) {
        data2.push({
          id: key,
          image: data.image,
          title: data.title,
          description: data.description,
          link: "/categories/" + key,
        })
      }
    })
  })
  // data section 2


  // data section 3
  const data3: Category[] = []
  const singerRef = ref(dbFirebase, 'singers');
  onValue(singerRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      if (data3.length < 5) {
        data3.push({
          id: key,
          image: data.image,
          title: data.title,
          description: data.description,
          link: "/singers/" + key,
        })
      }
    })
  })
  // data section 3

  
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

      {/* <section className="mb-[30px]">
        <div className="mb-[20px]">
          <Title text={"Danh Mục Nổi Bật"} />
        </div>
        <div className="grid grid-cols-5 gap-[20px]">
          {data2.map((item, index) => (
            <CategoryOutStanding key={index} item={item} />
          ))}

        </div>
      </section> */}
      <Section2HomePage/>

      <section className="mb-[30px]">
        <div className="mb-[20px]">
          <Title text={"Ca Sĩ Nổi Bật"} />
        </div>
        <div className="grid grid-cols-5 gap-[20px]">
          {data3.map((item, index) => (
            <CategoryOutStanding key={index} item={item} />
          ))}

        </div>
      </section>
    </>
  );
}
