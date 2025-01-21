/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardInfo } from "@/app/components/CategoryOutStanding/CardInfo";
import { SongItem2 } from "@/app/components/Song/SongItem2";
import { Title } from "@/app/components/Title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Project nghe nhạc trực tuyến",
};

export default async function SongDetailPage(props: any) {
  const { id } = await props.params;
  const detailSong: any = [];
  onValue(ref(dbFirebase, '/songs/' + id), (items) => {
    const data = items.val();
    const listNameSinger: any = [];
    for (let index = 0; index < data.singerId.length; index++) {
      const element = data.singerId[index];
      onValue(ref(dbFirebase, '/singers/' + element), (item) => {
        listNameSinger.push(item.val().title);
      })
    }
    console.log(data.categoryId + " sss");
    detailSong.push({
      image: data.image,
      title: data.title,
      singers: listNameSinger.join(', '),
      lyric: data.lyric,
      id: data.categoryId,
    })
  })
  if (!detailSong) {
    return <div>Loading...</div>;
  }

  const dataSong: any = []
  onValue(ref(dbFirebase, 'songs'), (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      const listNameSinger: any = [];

      if (data.categoryId === detailSong[0].id && key != id) {
        for (let index = 0; index < data.singerId.length; index++) {
          const element = data.singerId[index];
          onValue(ref(dbFirebase, '/singers/' + element), (item) => {
            listNameSinger.push(item.val().title);
          })
        }
        dataSong.push({
          id: key,
          title: data.title,
          image: data.image,
          singer: listNameSinger.join(', '),
          time: "4:32",
          wishlist: false,
          link: '/songs/' + key,
        })
      }
    })
  })
  if (!dataSong) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CardInfo
        image={detailSong[0].image}
        title={detailSong[0].title}
        description={detailSong[0].singers}
      />

      <section className="">
        <Title text={"Lời Bài Hát"} />
        <div className="p-[20px] bg-bg2 rounded-[15px] mb-[30px]">
          <div className="font-[500] text-[14px] text-white whitespace-pre-line">
            {detailSong[0].lyric.split("\\n").map((line: string, index: number) =>
              <span key={index}>
                {line}
                <br />
              </span>)}
          </div>
        </div>
      </section>

      <section className="">
        <Title text={"Bài Hát Cùng Danh Mục"} />
        {dataSong.map((item: any, index: number) => (
          <SongItem2 key={index} item={item} />
        ))}
      </section>

    </>
  );
}
