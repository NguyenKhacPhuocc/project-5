import { CategoryOutStanding } from "@/app/components/CategoryOutStanding/CategoryOutStanding";
import { Title } from "@/app/components/Title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Project nghe nhạc trực tuyến",
};

interface CategorySong {
  id: string,
  image: string,
  title: string,
  description: string,
  link: string,
}

export default function CategoryPage() {
  
  const categorySong: CategorySong[] = [];
  const categorySongRef = ref(dbFirebase, 'categories');
  onValue(categorySongRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      categorySong.push({
        id: key,
        image: data.image,
        title: data.title,
        description: data.description,
        link: "/categories/" + key,
      })
    })
  })

  return (
    <>
      <section className="mb-[30px]">
        <div className="mb-[20px]">
          <Title text={"Danh Mục Bài Hát"} />
        </div>
        <div className="grid grid-cols-5 gap-[20px]">
          {categorySong.map((item, index) => (
            <CategoryOutStanding key={index} item={item} />
          ))}

        </div>
      </section>
    </>
  );
}
