import { Title } from "@/app/components/Title/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Project nghe nhạc trực tuyến",
};

export default function LoginPage() {
  return (
    <>
      <section className="mt-[60px] flex flex-col items-center">
        <div className="">
          <Title text={"Đăng Nhập Tài Khoản"} />
        </div>
        <form className="flex flex-col w-[500px]">
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
      </section>
    </>
  );
}
