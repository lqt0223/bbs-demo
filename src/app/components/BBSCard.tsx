import { Button } from "@/components/ui/button";
import { toDate } from "@/lib/format";
import { Post } from "@/generated/client";
import Link from "next/link";

export type Props = {
  data: Post
}

export default function BBSCard(props: Props) {
  const { title, username, createdAt, content, id } = props.data
  return <div className="transition bg-white hover:bg-gray-100 p-4 rounded-lg border-gray-400 border shadow-sm">
      <Link href={`/post/${id}`}>
        <h1 className="font-bold">{username}: {title}</h1>
        <p>{content}</p>
        <p className="text-gray-400 text-sm">Posted at: {toDate(createdAt)}</p>
      </Link>
      <Button asChild>
          <Link href={`/post/${props.data.id}/edit`}>edit</Link>
      </Button>
    </div>
}
