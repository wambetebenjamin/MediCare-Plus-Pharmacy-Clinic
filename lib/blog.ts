import fs from "node:fs";
import path from "node:path";
import { parseFrontmatter, readingTime } from "./markdown";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function fileToPost(fileName: string): BlogPost {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = parseFrontmatter<Record<string, string>>(raw);
  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    category: data.category ?? "Health",
    author: data.author ?? "MediCare Plus",
    authorRole: data.authorRole ?? "Clinical Team",
    date: data.date ?? "2026-09-01",
    readTime: data.readTime ?? readingTime(content),
    image: data.image ?? "/images/blog-nutrition.jpg",
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  return files
    .map(fileToPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00+03:00").toLocaleDateString("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
