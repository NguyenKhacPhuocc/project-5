"use client";

import { Title } from "../Title/Title";
import { onValue, ref } from "firebase/database";
import { CategoryOutStanding } from "../CategoryOutStanding/CategoryOutStanding";
import { dbFirebase } from "@/app/firebaseConfig";
import { useState, useEffect } from "react";
import { FaRegCircleRight } from "react-icons/fa6"
import Link from "next/link";

interface Category {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export const Section2HomePage = () => {
  const [data2, setData2] = useState<Category[]>([]);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    // Theo dõi kích thước màn hình
    const handleResize = () => {
      setIsLg(window.innerWidth >= 768 && window.innerWidth < 1280); // Chỉ là `lg`
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Gọi lần đầu tiên để thiết lập đúng giá trị

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const categoryRef = ref(dbFirebase, "categories");
    onValue(categoryRef, (items) => {
      const newData: Category[] = [];
      items.forEach((item) => {
        if (newData.length < 5) {
          newData.push({
            id: item.key!,
            image: item.val().image,
            title: item.val().title,
            description: item.val().description,
            link: "/categories/" + item.key,
          });
        }
      });
      setData2(newData);
    });
  }, []);

  return (
    <section className="xl:mb-[30px] md:mb-[20px] sm:mb-[10px]">
      <div className="xl:mb-[10px] lg:mb-[5px]">
        <Title text={"Danh Mục Nổi Bật"} />
      </div>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 ">
        {data2.slice(0, isLg ? 4 : 5).map((item, index) => (
          <div key={index} className="relative group">
            <CategoryOutStanding item={item} />
            {/* Hiện box "xem thêm" khi hover vào phần tử cuối */}
            {index === data2.slice(0, isLg ? 4 : 5).length - 1 && (
              <Link href={"/categories"} className="hidden group-hover:flex flex-col absolute bottom-0 left-0 w-full h-full bg-[#5f718b] justify-center items-center bg-opacity-40 rounded-[15px]">
                <span className="text-white text-[20px] font-[700]">
                  Xem thêm
                </span>
                <span className="text-[40px] text-[#ffffff] font-semibold bg-primary rounded-[50%] opacity-85">
                  <FaRegCircleRight />
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

