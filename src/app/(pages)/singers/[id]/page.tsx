/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardInfo } from "@/app/components/CategoryOutStanding/CardInfo";
import { SongItem2 } from "@/app/components/Song/SongItem2";
import { Title } from "@/app/components/Title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Project nghe nhạc trực tuyến",
};

export default async function SingerDetailPage(props: any) {

  const { id } = await props.params;
  let detailSinger: any = null;
  onValue(ref(dbFirebase, '/singers/' + id), (item) => {
    detailSinger = item.val();
  })
  if (!detailSinger) {
    return <div>Loading...</div>;
  }

  const dataSong: any = []

  onValue(ref(dbFirebase, '/songs/'), (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      if (data.singerId.some((singers: any) => singers === id)) {
        const listNameSinger: any = [];
        for (let index = 0; index < data.singerId.length; index++) {
          const element = data.singerId[index];
          onValue(ref(dbFirebase, '/singers/' + element), (item) => {
            listNameSinger.push(item.val().title);
          })

        }
        dataSong.push({
          id: key,
          image: data.image,
          title: data.title,
          singers: listNameSinger.join(', '),
          listen: data.listen,
          time: "4:32",
          link: '/songs/' + key,
          audio: data.audio,
        })
      }
    })
  })

  return (
    <>
      <CardInfo
        image={detailSinger.image}
        title={detailSinger.title}
        description={detailSinger.description}
      />
      <section className="">
        <Title text={"Danh Sách Bài Hát"} />
        {dataSong.map((item: any, index: number) => (
          <SongItem2 key={index} item={item} />
        ))}
      </section>
    </>
  );
}
