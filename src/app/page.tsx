import { prisma } from "@/lib/prisma";
import BBSCardList from "./components/BBSCardList";

export default async function Home() {
  "use server"

  const list = await prisma.post.findMany()

  return <main>
    <BBSCardList list={list} />
  </main>
}
