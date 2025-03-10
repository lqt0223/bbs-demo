import { prisma } from "@/lib/prisma";
import BBSCardList from "./components/BBSCardList";

export const revalidate = 0

export default async function Home() {
  const list = await prisma.post.findMany()

  return <main>
    <BBSCardList list={list} />
  </main>
}
