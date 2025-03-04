/* eslint-disable @typescript-eslint/no-explicit-any */
import SongDetail from "@/app/components/Song/SongDetail";
import { authFirebase } from "@/app/firebaseConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Nghe nhạc trực tuyến",
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
