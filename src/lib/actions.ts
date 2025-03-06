'use server'

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function getPosts() {
  const allPosts = await prisma.post.findMany({ take: 100 })
  return NextResponse.json(allPosts)

}

export async function getPost(id: number) {
  const allPosts = await prisma.post.findUnique({ where: { id } })
  return NextResponse.json(allPosts)
}
