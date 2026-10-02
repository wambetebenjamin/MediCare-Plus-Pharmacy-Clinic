import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";
import { blogImages } from "@/components/BlogSection";
import { SITE, WA_MAIN } from "@/lib/site";
import blogNutrition from "@/public/images/blog-nutrition.jpg";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const image = blogImages[post.image] ?? blogNutrition;
  const others = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE.url}${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Physician",
      name: post.author,
      worksFor: { "@type": "MedicalClinic", name: SITE.name, url: SITE.url },
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/icon.svg` },
    },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <header className="article-hero">
        <div className="container article-hero-inner" data-reveal>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/#blog">Health Blog</Link>
            <Icon name="arrowRight" size={13} />
            <span>{post.category}</span>
          </nav>
          <h1>{post.title}</h1>
          <div className="post-meta" style={{ justifyContent: "center", fontSize: "0.9rem" }}>
            <span>
              <Icon name="users" size={16} />
              {post.author}
            </span>
            <span>
              <Icon name="calendar" size={15} />
              {formatDate(post.date)}
            </span>
            <span>
              <Icon name="clock" size={15} />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      <div className="container" style={{ paddingBottom: "96px" }}>
        <div className="article-body-wrap">
          <div className="article-featured" data-reveal="zoom">
            <Image
              src={image}
              alt={post.title}
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 860px) 94vw, 780px"
            />
          </div>

          <div className="article-body" data-reveal>
            {renderMarkdown(post.content)}
          </div>

          <aside className="article-cta" data-reveal>
            <div>
              <h3>Seen a doctor lately?</h3>
              <p>
                Get personalised advice from {post.author.split(" ")[1] ?? "our team"}
                {" "}and the MediCare Plus clinical team.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn btn-coral btn-sm">
                <Icon name="calendar" size={16} />
                Book Appointment
              </Link>
              <a
                href={WA_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
              >
                <Icon name="whatsapp" size={16} />
                WhatsApp Us
              </a>
            </div>
          </aside>

          <p className="article-share-hint">
            This article is for general education and does not replace a
            consultation with a qualified clinician.
          </p>

          {others.length > 0 && (
            <div style={{ marginTop: "56px" }} data-reveal>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "22px" }}>
                More from our doctors
              </h2>
              <div className="blog-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
                {others.map((other) => (
                  <article className="post-card" key={other.slug}>
                    <div className="post-media" style={{ aspectRatio: "16 / 8" }}>
                      <Image
                        src={blogImages[other.image] ?? blogNutrition}
                        alt={other.title}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 860px) 92vw, 380px"
                      />
                      <span className="post-cat">{other.category}</span>
                    </div>
                    <div className="post-body">
                      <div className="post-meta">
                        <span>
                          <Icon name="calendar" size={14} />
                          {formatDate(other.date)}
                        </span>
                        <span>
                          <Icon name="clock" size={14} />
                          {other.readTime}
                        </span>
                      </div>
                      <h3>
                        <Link href={`/blog/${other.slug}`}>{other.title}</Link>
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
