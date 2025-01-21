/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryOutStanding } from "@/app/components/CategoryOutStanding/CategoryOutStanding";
import { Title } from "@/app/components/Title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Project nghe nhạc trực tuyến",
};

export default function SingerPage() {
  const dataSinger: any = []

  onValue(ref(dbFirebase, '/singers/'), (items) => {
    items.forEach(item => {
      const key = item.key;
      const data = item.val();

      dataSinger.push({
        id: key,
        image: data.image,
        title: data.title,
        description: data.description,
        link: '/singers/' + key,
      })
    });
  })
  return (
    <>
      <section className="">
        <Title text={"Danh Sách Ca Sĩ"} />
        <div className="grid grid-cols-5 gap-[20px]">
          {dataSinger.map((item: any, index: number) => (
            <CategoryOutStanding key={index} item={item} />
          ))}

        </div>
      </section >
    </>
  );
}
