import { NextRequest, NextResponse } from "next/server";
import { getAllPosts, getPost } from "@/lib/blog";

export const dynamic = "force-dynamic";

/**
 * Health blog API.
 *   GET /api/blog           → all article summaries (newest first)
 *   GET /api/blog?slug=x    → single article with full content
 *
 * Articles are authored as Markdown files in /content/blog with frontmatter
 * metadata (drop-in replaceable with MDX/ContentLayer at build time).
 */
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");

  if (slug) {
    const post = getPost(slug);
    if (!post) {
      return NextResponse.json(
        { ok: false, error: "Article not found." },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true, post });
  }

  const posts = getAllPosts().map(({ content, ...meta }) => meta);
  return NextResponse.json({ ok: true, count: posts.length, posts });
}
