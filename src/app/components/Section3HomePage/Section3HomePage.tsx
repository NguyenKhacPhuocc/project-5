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

export const Section3HomePage = () => {

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
      <section className="mb-[30px]">
        <div className="mb-[10px]">
          <Title text={"Ca Sĩ Nổi Bật"} />
        </div>
        <div className="grid grid-cols-5 ">
          {data3.map((item, index) => (
            <CategoryOutStanding key={index} item={item} />
          ))}

        </div>
      </section>
    </>
  )
}