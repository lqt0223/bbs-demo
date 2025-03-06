import { headers } from 'next/headers'
import BBSCardList from "./components/BBSCardList";
import { Post } from '@prisma/client';

async function getPosts() {
  const host = (await headers()).get('host')
  const res = await fetch(`http://${host}/api/post`, {
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
