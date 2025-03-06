import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  const params = await context.params
  const allPosts = await prisma.post.findUnique({ where: { id: +params.id } })
  return NextResponse.json(allPosts)
}
