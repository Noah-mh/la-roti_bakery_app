import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";
import MainPage from "@/app/_components/MainPage";


export default async function Home() {


  return (
    <main >
      <MainPage />
    </main>
  );
}
