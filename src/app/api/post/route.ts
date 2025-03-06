import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const allPosts = await prisma.post.findMany()
  return NextResponse.json(allPosts)
}

export async function POST(req: Request) {
  const { username, title, content } = await req.json()
  const res = await prisma.post.create({
    data: { username, title, content }
  })

  return NextResponse.json(res)
}

export async function PUT(req: Request) {
  const { username, title, content, id } = await req.json()
  const res = await prisma.post.update({
    where: { id },
    data: { username, title, content }
  })

  return NextResponse.json(res)
}
