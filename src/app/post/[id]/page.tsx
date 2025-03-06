import BackHOC from "@/app/components/BackHOC"
import BBSCard from "@/app/components/BBSCard"
import { Button } from "@/components/ui/button"
import { Post as PostType } from "@/generated/client"

export default async function Post(ctx: { params: Promise<{ id: string }> }) {
  const params = await ctx.params
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/post/${params.id}`, {
    cache: 'no-store' // must in SSR
  })
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
