/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { authFirebase} from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export const FormLogin = () => {

  const router = useRouter();

  const handleLogin = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email && password) {
      signInWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {

          const user = userCredential.user;
          if (user) {
            router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }


  return (
    <>
      <form className="flex flex-col w-[500px]" onSubmit={handleLogin}>
        <label htmlFor="email" className="text-[16px] font-[600] text-white mb-[5px]">
          Email
          <span className="text-[16px] font-[600] text-red-600 ml-[8px]">*</span>
        </label>
        <input type="text" name="email" id="email" className="p-[16px] outline-none rounded-[6px] text-[16px] text-[#5a5f60] font-[600]" placeholder="Ví dụ: nguyenvana@gmail.com" />
        <label htmlFor="password" className="text-[16px] font-[600] text-white mb-[5px] mt-[15px]">
          Mật khẩu
          <span className="text-[16px] font-[600] text-red-600 ml-[8px]">*</span>
        </label>
        <input type="password" id="password" name="password" className="p-[16px] outline-none rounded-[6px] text-[16px] text-[#5a5f60] font-[600]" />
        <button className="mt-[15px] bg-primary rounded-[6px] py-[14px] px-[44px] font-[700] text-[16px]   text-white">Đăng Nhập</button>
      </form>
    </>
  )
}