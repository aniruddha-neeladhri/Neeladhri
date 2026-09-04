import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants/blogs";
import { getAllBrandSlugs, brandIdFromSlug } from "@/lib/data/brands/slugs";
import { getSiteHostname } from "@/lib/site";
import { brandsData } from "@/lib/constants/brands";

export const metadata: Metadata = {
  title: "Sitemap | Neeladhri Ceramics",
  description: "Browse all pages on the Neeladhri Ceramics website.",
};

const MAIN_PAGES = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/sitemap", label: "Sitemap" },
] as const;

function linkClassName() {
  return "text-[#513B27] underline-offset-4 hover:underline";
}

export default function SitemapPage() {
  const brandSlugs = getAllBrandSlugs();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <h1 className="mb-2 font-cormorant-garamond text-4xl font-medium text-[#513B27]">
        Sitemap
      </h1>
      <p className="mb-10 font-poppins text-sm text-[#555555]">
        All public pages on {getSiteHostname()}. Machine-readable sitemap:{" "}
        <Link href="/sitemap.xml" className={linkClassName()}>
          /sitemap.xml
        </Link>
      </p>

      <section className="mb-10">
        <h2 className="mb-4 font-montserrat text-lg font-semibold text-[#333333]">
          Main pages
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {MAIN_PAGES.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={`font-poppins text-sm ${linkClassName()}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-montserrat text-lg font-semibold text-[#333333]">
          Brands ({brandSlugs.length})
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {brandSlugs.map((slug) => {
            const brandId = brandIdFromSlug(slug);
            const brand = brandId ? brandsData[brandId] : undefined;
            const label = brand?.name ?? slug;

            return (
              <li key={slug}>
                <Link
                  href={`/brands/${slug}`}
                  className={`font-poppins text-sm ${linkClassName()}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 font-montserrat text-lg font-semibold text-[#333333]">
          Blog ({BLOG_POSTS.length})
        </h2>
        <ul className="grid gap-2">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className={`font-poppins text-sm ${linkClassName()}`}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
