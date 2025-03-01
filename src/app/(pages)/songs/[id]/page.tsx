/* eslint-disable @typescript-eslint/no-explicit-any */
import SongDetail from "@/app/components/Song/SongDetail";
import { authFirebase } from "@/app/firebaseConfig";
// import { use } from "react";
import type { Metadata } from "next";
// import { useParams } from "next/navigation";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Project nghe nhạc trực tuyến",
};

export default function SongDetailPage(props: any) {
  const userId: any = authFirebase?.currentUser?.uid;
  console.log(userId);
  const { id } = props.params;

  return (
    <>
      <SongDetail id={id} />
    </>
  );
}
