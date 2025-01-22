"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { IoMdHome } from "react-icons/io";
import { FaMusic, FaHeart, FaPodcast } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authFirebase } from "@/app/firebaseConfig";

export const Sider = () => {

  const [isLogin, setIsLogin] = useState<boolean>();
  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    })
  }, [])

  const menu = [
    {
      icon: <><IoMdHome /></>,
      title: "Trang chủ",
      link: "/",
    }, {
      icon: <><FaMusic /></>,
      title: "Danh mục bài hát",
      link: "/categories",
    }, {
      icon: <><FaPodcast /></>,
      title: "Ca sĩ",
      link: "/singers",
    }, {
      icon: <><FaHeart /></>,
      title: "Bài hát yêu thích",
      link: "/wishlist",
      logged: true,
    }, {
      icon: <><FaSignOutAlt /></>,
      title: "Đăng xuất",
      link: "/logout",
      logged: true,
    }, {
      icon: <><FaUser /></>,
      title: "Đăng nhập",
      link: "/login",
      logged: false,
    }, {
      icon: <><FaUserPlus /></>,
      title: "Đăng ký",
      link: "/register",
      logged: false,
    },
  ]

  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <div className="bg-bg2 text-white h-[100vh] fixed w-[280px] ">
        <div className="bg-bg3 py-[25px] px-[20px]">
          <Link href={"/"}>
            <img
              src="/Logo.svg"
              alt="logo"
              className="w-auto h-[42px]"
            />
          </Link>
        </div>
        <nav className="mt-[30px] px-[20px]">
          <ul className="">
            {menu
              .filter(item => (isLogin ? item.logged !== false : item.logged === false || item.logged === undefined)) // Lọc menu dựa trên trạng thái isLogin
              .map((item, index) => (
                <li className="mb-[20px] " key={index}>
                  <Link
                    href={item.link}
                    className={
                      "flex gap-[20px] items-center hover:text-primary transition-colors duration-200 py-[5px] " +
                      (pathname === item.link ? "text-primary" : "text-white")
                    }
                  >
                    <span className="text-[22px]">
                      {item.icon}
                    </span>
                    <span className="font-[700] text-[16px] leading-[20px]">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  )
}