import { getPosts as getPostsAction } from "@/lib/actions";
import BBSCardList from "./components/BBSCardList";

async function getPosts() {
  const res = await getPostsAction()
  return res.json()
}

export default async function Home() {
  const list = await getPosts()

  return <main>
    <BBSCardList list={list} />
  </main>
}
