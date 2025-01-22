import SongWishListPage from "@/app/components/SongWishlistPage/SongWishlistPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài hát yêu thích",
  description: "Project nghe nhạc trực tuyến",
};

export default function WishListPage() {
  return (
    <>
      <SongWishListPage/>
    </>
  );
}
