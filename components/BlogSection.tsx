import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { getAllPosts, formatDate } from "@/lib/blog";
import blogNutrition from "@/public/images/blog-nutrition.jpg";
import blogMaternal from "@/public/images/blog-maternal.jpg";
import blogDiabetes from "@/public/images/blog-diabetes.jpg";
import type { StaticImageData } from "next/image";

export const blogImages: Record<string, StaticImageData> = {
  "/images/blog-nutrition.jpg": blogNutrition,
  "/images/blog-maternal.jpg": blogMaternal,
  "/images/blog-diabetes.jpg": blogDiabetes,
};

function authorInitials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function BlogSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="section" id="blog" aria-label="Health blog">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Health Blog</span>
          <h2>Advice from our doctors</h2>
          <div className="divider" />
          <p>
            Practical, Kenya-relevant health guidance written by the same
            clinicians you will meet at our branches.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className="post-card"
              data-reveal
              style={{ ["--rd" as string]: `${i * 110}ms` }}
            >
              <div className="post-media">
                <Image
                  src={blogImages[post.image] ?? blogNutrition}
                  alt={post.title}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 980px) 92vw, 30vw"
                />
                <span className="post-cat">{post.category}</span>
              </div>
              <div className="post-body">
                <div className="post-meta">
                  <span>
                    <Icon name="calendar" size={14} />
                    {formatDate(post.date)}
                  </span>
                  <span>
                    <Icon name="clock" size={14} />
                    {post.readTime}
                  </span>
                </div>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <div className="post-foot">
                  <div className="post-author">
                    <span className="post-avatar">{authorInitials(post.author)}</span>
                    <span>
                      <b>{post.author}</b>
                      <span>{post.authorRole.split(",")[0]}</span>
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="post-read"
                    aria-label={`Read article: ${post.title}`}
                  >
                    Read Article
                    <Icon name="arrowRight" size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
