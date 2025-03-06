import BackHOC from "@/app/components/BackHOC"
import BBSCard from "@/app/components/BBSCard"
import { Button } from "@/components/ui/button"
import { Post as PostType } from "@/generated/client"
import { getPost } from "@/lib/actions"

export default async function Post(ctx: { params: Promise<{ id: string }> }) {
  const params = await ctx.params
  const res = await getPost(+params.id)
  const post = await res.json() as PostType
  return <div>
    <BBSCard data={post} />
    <Button>
      <BackHOC>
        back
      </BackHOC>
    </Button>
  </div>
} 
