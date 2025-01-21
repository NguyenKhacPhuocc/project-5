/* eslint-disable @typescript-eslint/no-explicit-any */
import { SongItem2 } from "@/app/components/Song/SongItem2";
import { Title } from "@/app/components/Title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài hát yêu thích",
  description: "Project nghe nhạc trực tuyến",
};

export default function WishListPage() {

  const dataWishlistSong: any = []
  onValue(ref(dbFirebase, '/songs/'), (items) => (
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      const listNameSinger: any = [];
      for (let index = 0; index < data.singerId.length; index++) {
        const element = data.singerId[index];
        onValue(ref(dbFirebase, '/singers/' + element), (item) => (
          listNameSinger.push(item.val().title)
        ))
      }

      dataWishlistSong.push({
        id: key,
        image: data.image,
        title: data.title,
        singer: listNameSinger.join(', '),
        time: "4:32",
        wishlist: true,
        link: '/songs/' + key,
      })
    })
  ))

  return (
    <>
      <section className="">
        <Title text={"Bài Hát Yêu Thích"} />
        {dataWishlistSong.map((item: any, index: number) => (
          <SongItem2 key={index} item={item} />
        ))}
      </section>
    </>
  );
}
