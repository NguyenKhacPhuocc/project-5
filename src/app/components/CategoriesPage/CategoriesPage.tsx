"use client";

import { Title } from "../Title/Title";
import { onValue, ref } from "firebase/database";
import { CategoryOutStanding } from "../CategoryOutStanding/CategoryOutStanding";
import { dbFirebase } from "@/app/firebaseConfig";

interface CategorySong {
  id: string,
  image: string,
  title: string,
  description: string,
  link: string,
}

export const CategoriesPage = () => {

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
        <div className="mb-[10px]">
          <Title text={"Danh Mục Bài Hát"} />
        </div>
        <div className="grid grid-cols-5">
          {categorySong.map((item, index) => (
            <CategoryOutStanding key={index} item={item} />
          ))}

        </div>
      </section>
    </>
  )
}