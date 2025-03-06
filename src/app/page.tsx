import { getPosts as getPostsAction } from "@/lib/actions";
import BBSCardList from "./components/BBSCardList";
import { Post } from '@/generated/client';

async function getPosts() {
  const res = await getPostsAction()
  return res.json() as Promise<Post[]>
}

export default async function Home() {
  const list = await getPosts()

  return <main>
    <BBSCardList list={list} />
  </main>
}
