import type { Metadata } from "next";
import "./globals.css";
import { Sider } from "./components/Sider/Sider";
import { Search } from "./components/Search/Search";
import { Play } from "./components/Play/Play";
import { Suspense } from "react";
import { Alart } from "./components/Alart/Alart";

export const metadata: Metadata = {
  title: "MuseStream",
  description: "Project nghe nhạc trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* Thêm thẻ link cho favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-bg1">
        <Alart />

        <div className=" mx-auto">
          <div className="flex items-start">
            <div className="w-[280px] z-20 lg:block menu open">
              <Sider />
            </div>
            <div className="flex-1  relative mx-[3%]">
              <Suspense>
                <Search />
              </Suspense>
              <main className="xl:mt-[30px] xl:mb-[120px] lg:mt-[25px] lg:mb-[100px] md:mt-[20px] md:mb-[80px] sm:mt-[15px] sm:mb-[60px] min-h-screen mx-[5.2%]">
                {children}
              </main>
            </div>
          </div>
        </div>
        <Play />
      </body>
    </html>
  );
}
