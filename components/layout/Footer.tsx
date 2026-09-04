import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import LazyMapEmbed from "@/components/layout/LazyMapEmbed";
import {
  ABOUT_LINKS,
  ADDRESS,
  EMAIL,
  LEGAL_LINKS,
  PHONE,
  PRODUCT_LINKS,
  SOCIAL,
  TAGLINE,
} from "@/lib/constants/footer";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Neeladhri+Ceramics,+Skanda+Mansion,+JSS+Circle+748/41,+Kanakapura+Rd,+7th+Block,+Jayanagar+Bangalore,+Karnataka+560070,+India&z=16&output=embed";

export default function Footer() {
  return (
    <footer className="w-full bg-[#262626] text-white">

      {/* MOBILE & TABLET FOOTER (< lg) */}
      <div className="lg:hidden flex flex-col items-center text-center px-4 py-4 gap-y-5 bg-[#262626]">

        {/* Brand */}
        <div className="flex flex-col items-center gap-3">
          <Link href="/">
            <Image src="/logo.png" alt="Neeladhri Ceramics" width={160} height={60} className="h-16 w-auto object-contain" />
          </Link>
          <Typography variant="body-sm" className="mt-1 max-w-[280px] text-white">
            Your trusted destination for premium tiles, bath solutions, sanitaryware, and thoughtfully designed living spaces.
          </Typography>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-start justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[3px] shrink-0 text-neutral-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <Typography variant="body-sm" className="text-white leading-relaxed max-w-[280px] -translate-x-[20px] lg:-translate-x-0">
                {ADDRESS}
              </Typography>
            </div>
            <div className="w-full max-w-[280px] rounded-lg overflow-hidden border border-neutral-700">
              <LazyMapEmbed
                src={MAP_EMBED_URL}
                title="Neeladhri Ceramics Location"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-neutral-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="transition hover:text-neutral-300">
                <Typography variant="body-sm" className="text-white">{PHONE}</Typography>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-neutral-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:hello@neeladhri.com" className="transition hover:text-neutral-300">
                <Typography variant="body-sm" className="text-white">hello@neeladhri.com</Typography>
              </a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-x-14 gap-y-4 text-left w-max mx-auto mt-2">
          <Link href="/about" className="transition hover:text-neutral-300"><Typography variant="body-sm" className="text-white">About Us</Typography></Link>
          <Link href="/gallery" className="transition hover:text-neutral-300"><Typography variant="body-sm" className="text-white">Gallery</Typography></Link>
          <Link href="/collection" className="transition hover:text-neutral-300"><Typography variant="body-sm" className="text-white">Collections</Typography></Link>
          <Link href="/blog" className="transition hover:text-neutral-300"><Typography variant="body-sm" className="text-white">Blog</Typography></Link>
          <Link href="/brands" className="transition hover:text-neutral-300"><Typography variant="body-sm" className="text-white">Brands</Typography></Link>
          <Link href="/contact" className="transition hover:text-neutral-300"><Typography variant="body-sm" className="text-white">Contact Us</Typography></Link>
        </div>

        {/* Social Icons & Bottom Bar */}
        <div className="flex flex-col items-center gap-4 mt-6 w-full">
          <div className="flex gap-5 mb-2">
            <a href={SOCIAL.find(s => s.name === "Facebook")?.href || "#"} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href={SOCIAL.find(s => s.name === "Instagram")?.href || "#"} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href={SOCIAL.find(s => s.name === "X" || s.name === "Twitter")?.href || "#"} aria-label="X" target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"></path></svg>
            </a>
            <a href={SOCIAL.find(s => s.name === "LinkedIn")?.href || "#"} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>

          <div className="flex gap-4">
            <Link href="/privacy" className="transition hover:text-neutral-300">
              <Typography variant="body-sm" className="text-white">Privacy Policy</Typography>
            </Link>
            <Link href="/terms" className="transition hover:text-neutral-300">
              <Typography variant="body-sm" className="text-white">Terms of Service</Typography>
            </Link>
            <Link href="/sitemap.xml" className="transition hover:text-neutral-300">
              <Typography variant="body-sm" className="text-white">Sitemap</Typography>
            </Link>
          </div>

          <Typography variant="body-sm" className="text-white">
            © 2026 Neeladhri Ceramics. All rights reserved.
          </Typography>
        </div>
      </div>

      {/* DESKTOP FOOTER (>= lg) */}
      <div className="hidden lg:block">
        <div className="mx-auto px-6 lg:px-8 xl:px-12 py-4">
          <div className="grid grid-cols-1 gap-y-10 gap-x-10 text-left sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {/* Brand */}
            <div className="flex flex-col space-y-5">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Neeladhri Ceramics"
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </Link>
              <Typography variant="body-lg" className="max-w-[260px] leading-relaxed text-white font-medium font-montserrat">
                {TAGLINE}
              </Typography>
              <div className="flex gap-5">
                <a href={SOCIAL.find(s => s.name === "Facebook")?.href || "#"} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="opacity-90 transition hover:opacity-100 text-white hover:text-neutral-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href={SOCIAL.find(s => s.name === "Instagram")?.href || "#"} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="opacity-90 transition hover:opacity-100 text-white hover:text-neutral-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href={SOCIAL.find(s => s.name === "X" || s.name === "Twitter")?.href || "#"} aria-label="X" target="_blank" rel="noopener noreferrer" className="opacity-90 transition hover:opacity-100 text-white hover:text-neutral-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"></path></svg>
                </a>
                <a href={SOCIAL.find(s => s.name === "LinkedIn")?.href || "#"} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="opacity-90 transition hover:opacity-100 text-white hover:text-neutral-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

            {/* About Us */}
            <div className="space-y-5">
              <Typography variant="body-lg" className="text-white">
                <Link href="/about" className="transition hover:text-neutral-300 font-medium font-montserrat">
                  About Us
                </Link>
              </Typography>
              <ul className="space-y-5">
                {ABOUT_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-[15px] text-white transition hover:text-neutral-300">
                      <Typography variant="body-lg" className="text-white transition hover:text-neutral-300 font-medium font-montserrat">{label}</Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-5">
              <Typography variant="body-lg" className="text-white font-medium font-montserrat">
                Products
              </Typography>
              <ul className="space-y-5">
                {PRODUCT_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-[15px] text-white transition hover:text-neutral-300">
                      <Typography variant="body-lg" className="text-white transition hover:text-neutral-300 font-medium font-montserrat">{label}</Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-4">
              <Typography variant="body-lg" className="text-white font-medium font-montserrat">
                Contact Us
              </Typography>
              <ul className="space-y-4 text-[15px] text-white">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-white"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <Typography variant="body-lg" className="max-w-[280px] leading-relaxed text-white font-medium font-montserrat">
                    {ADDRESS}
                  </Typography>
                </li>
                <li>
                  <div className="w-full max-w-[280px] rounded-lg overflow-hidden border border-neutral-700">
                    <LazyMapEmbed
                      src={MAP_EMBED_URL}
                      title="Neeladhri Ceramics Location"
                    />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="transition hover:text-neutral-300">
                    <Typography variant="body-lg" className="text-white transition hover:text-neutral-300 font-medium font-montserrat">{PHONE}</Typography>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-white"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <a href={`mailto:${EMAIL}`} className="transition hover:text-neutral-300">
                    <Typography variant="body-lg" className="text-white transition hover:text-neutral-300 font-medium font-montserrat">{EMAIL}</Typography>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-600">
          <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 py-5 lg:max-w-[1800px] md:flex-row">
            <Typography variant="body-sm" className="text-white font-medium font-montserrat">
              © {new Date().getFullYear()} Neeladhri Ceramics. All rights reserved.
            </Typography>

            <div className="flex gap-8 text-sm text-white">
              {LEGAL_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} className="transition hover:text-neutral-300">
                  <Typography variant="body-sm" className="text-white transition hover:text-neutral-300 font-medium font-montserrat">{label}</Typography>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}