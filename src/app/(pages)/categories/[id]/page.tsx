/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardInfo } from "@/app/components/CategoryOutStanding/CardInfo";
import { SongItem2 } from "@/app/components/Song/SongItem2";
import { Title } from "@/app/components/Title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Danh sách bài hát",
  description: "Project nghe nhạc trực tuyến",
};

export default async function CategoryDetailPage(props: any) {
  const { id } = await props.params;
  let detailCategory: any = null;

  onValue(ref(dbFirebase, '/categories/' + id), (item) => {
    detailCategory = item.val();
  })
  if (!detailCategory) {
    return <div>Loading...</div>;
  }

  const dataSong: any[] = []

  onValue(ref(dbFirebase, '/songs'), (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      const listNameSinger: any = [];

      for (let index = 0; index < data.singerId.length; index++) {
        const element = data.singerId[index];
        onValue(ref(dbFirebase, '/singers/' + element), (itemNameSinger) => {
          listNameSinger.push(itemNameSinger.val().title);
        })
      }


      if (data.categoryId === id) {
        dataSong.push({
          id: key,
          image: data.image,
          title: data.title,
          singers: listNameSinger.join(', '),
          listen: data.listen,
          link: "/songs/" + key,
          audio: data.audio,
        })
      }
    })
  })

  return (
    <>
      <CardInfo
        image={detailCategory.image}
        description={detailCategory.description}
        title={detailCategory.title}
      />
      <section className="">
        <Title text={"Danh Sách Bài Hát"} />

        {dataSong.map((item, index) => (
          <SongItem2 key={index} item={item} />
        ))}
      </section>
    </>
  );
}
