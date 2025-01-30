import SongRankingPage from "@/app/components/SongRankingPage/SongRankingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Project nghe nhạc trực tuyến",
};

export default function RankingPage() {
  
  return (
    <>
      <SongRankingPage/>
    </>
  );
}
