/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export const FormRegister = () => {
  const router = useRouter();

  const handleRegister = (event: any) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (fullName && email && password) {
      createUserWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {

          const user = userCredential.user;
          if (user) {
            set(ref(dbFirebase, 'users/' + user.uid), {
              fullName: fullName,
            }).then(() => {
              console.log("đăng ký thành công!");
              router.push("/");
            })

          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }


  return (
    <>
      <form
        className="flex flex-col w-[500px]"
        onSubmit={handleRegister}
      >
        <label
          htmlFor="fullName"
          className="text-[16px] font-[600] text-white mb-[5px]">
          Họ Tên
          <span
            className="text-[16px] font-[600] text-red-600 ml-[8px]">
            *
          </span>
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="p-[16px] outline-none rounded-[6px] text-[16px] text-[#5a5f60] font-[600]"
          placeholder="Ví dụ: Ví dụ: Le Van A"
        />
        <label
          htmlFor="email"
          className="text-[16px] font-[600] text-white mb-[5px] mt-[15px]"
        >
          Email
          <span
            className="text-[16px] font-[600] text-red-600 ml-[8px]">
            *
          </span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="p-[16px] outline-none rounded-[6px] text-[16px] text-[#5a5f60] font-[600]"
          placeholder="Ví dụ: nguyenvana@gmail.com"
        />
        <label
          htmlFor="password"
          className="text-[16px] font-[600] text-white mb-[5px] mt-[15px]"
        >
          Mật khẩu
          <span
            className="text-[16px] font-[600] text-red-600 ml-[8px]">
            *
          </span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="p-[16px] outline-none rounded-[6px] text-[16px] text-[#5a5f60] font-[600]"
        />
        <button
          className="mt-[15px] bg-primary rounded-[6px] py-[14px] px-[44px] font-[700] text-[16px]   text-white"
        >
          Đăng Ký
        </button>
      </form>
    </>
  )
}