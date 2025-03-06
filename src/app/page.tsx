import BBSCardList from "./components/BBSCardList";
import { Post } from '@/generated/client';

async function getPosts() {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/post`, {
    cache: 'no-store' // must in SSR
  })
  return res.json() as Promise<Post[]>
}

export default async function Home() {
  const list = await getPosts()

  return <main>
    <BBSCardList list={list} />
  </main>
}
