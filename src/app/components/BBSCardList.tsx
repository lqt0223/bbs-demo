import { type Post } from "@prisma/client";
import BBSCard from "./BBSCard";

export type Props = {
  list: Post[]
}

export default function BBSCardList(props: Props) {
  return <div className="m-4 grid gap-4 lg:grid-cols-3">
    {props.list.map(post => <BBSCard data={post} key={post.id}/>)}
  </div>
}
