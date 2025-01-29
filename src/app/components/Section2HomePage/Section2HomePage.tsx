/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Title } from "../Title/Title";
import { onValue, ref } from "firebase/database";
import { CategoryOutStanding } from "../CategoryOutStanding/CategoryOutStanding";
import { dbFirebase } from "@/app/firebaseConfig";

interface Category {
  id: string,
  image: string,
  title: string,
  description: string,
  link: string,
}

export const Section2HomePage = () => {

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

  return (
    <>
      <section className="mb-[30px]">
        <div className="mb-[10px]">
          <Title text={"Danh Mục Nổi Bật"} />
        </div>
        <div className="grid grid-cols-5">
          {data2.map((item, index) => (
            <CategoryOutStanding key={index} item={item} />
          ))}

        </div>
      </section>
    </>
  )
}