import BackHOC from "@/app/components/BackHOC"
import BBSCard from "@/app/components/BBSCard"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"

export default async function PostPage(ctx: { params: Promise<{ id: string }> }) {
  const params = await ctx.params
  const post = await prisma.post.findUnique({ where: { id: +params.id} })
  return <div>
    {!post ? null : <><BBSCard data={post} />
    <Button>
      <BackHOC>
        back
      </BackHOC>
    </Button></>}
  </div>
} 
