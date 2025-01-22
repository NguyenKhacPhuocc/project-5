/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardInfoMusic } from "@/app/components/CategoryOutStanding/CardInfoMusic";
// import { SongItem2 } from "@/app/components/Song/SongItem2";
import SongSameCategory from "@/app/components/SongSameCategory/SongSameCategory";
import { Title } from "@/app/components/Title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Project nghe nhạc trực tuyến",
};

export default async function SongDetailPage(props: any) {
  const userId: any = authFirebase?.currentUser?.uid;
  console.log(userId);
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
    detailSong.push({
      image: data.image,
      title: data.title,
      singers: listNameSinger.join(', '),
      lyric: data.lyric,
      id: data.categoryId,
      audio: data.audio,
      wishlist: data.wishlist ? data.wishlist[userId] : false,
    })
  })

  console.log(userId);
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
          listen: data.listen,
          time: "4:32",
          wishlist: data.wishlist ? data.wishlist[userId] : false,
          link: '/songs/' + key,
          audio: data.audio,
        })
      }
    })
  })
  if (!dataSong) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CardInfoMusic
        image={detailSong[0].image}
        title={detailSong[0].title}
        description={detailSong[0].singers}
        audio={detailSong[0].audio}
        wishlist={detailSong[0].wishlist}
        id={id}
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

      <SongSameCategory idSong={id} idCategory={detailSong[0].id} />
    </>
  );
}
