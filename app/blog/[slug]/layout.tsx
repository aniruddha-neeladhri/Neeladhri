import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/constants/blogs";
import { getBlogSeo, pageMetadata } from "@/lib/seo";

type BlogPostLayoutProps = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: Pick<BlogPostLayoutProps, "params">): Promise<Metadata> {
  const { slug } = await params;
  const seo = getBlogSeo(slug);
  const post = BLOG_POSTS.find((entry) => entry.slug === slug);

  if (!seo && !post) {
    return { title: "Blog | Neeladhri Ceramics" };
  }

  return pageMetadata(
    {
      title:
        seo?.title ??
        (post?.metaTitle?.trim() || post?.title || "Blog | Neeladhri Ceramics"),
      description:
        seo?.description ??
        (post?.metaDescription?.trim() ||
          "Explore tile, bathroom and interior design ideas from Neeladhri Ceramics."),
      h1: seo?.h1 ?? post?.title ?? "",
    },
    `/blog/${slug}`,
  );
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return children;
}
