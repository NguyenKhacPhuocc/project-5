import { Title } from "@/app/components/Title/Title";
import type { Metadata } from "next";
import { Section1 } from "./Section1";

export const metadata: Metadata = {
  title: "Tìm kiếm",
  description: "Project nghe nhạc trực tuyến",
};

export default function SearchPage() {
  return (
    <>
      <section className="">
        <Title text={"Kết Quả Tìm Kiếm"} />
        <div className="">
          <Section1 />
        </div>
      </section>

    </>
  );
}
