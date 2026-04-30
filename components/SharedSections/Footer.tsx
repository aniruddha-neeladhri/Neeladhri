import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import {
  ABOUT_LINKS,
  EMAIL,
  LEGAL_LINKS,
  PHONE,
  PRODUCT_LINKS,
  SOCIAL,
  TAGLINE,
} from "@/lib/constants/footer";

export default function Footer() {
  return (
    <footer className="w-full bg-[#262626] text-neutral-300">

      {/* MAIN FOOTER */}
      <div className="mx-auto px-6 lg:px-8 xl:px-22 py-16">
        <div className="grid grid-cols-1 gap-y-10 gap-x-10 text-left sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {/* Brand */}
          <div className="flex flex-col space-y-5">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Neeladhri Ceramics"
                width={140}
                height={46}
                className="h-8 w-auto object-contain sm:h-9"
              />
            </Link>
            <Typography variant="body-lg" className="max-w-[260px] leading-relaxed text-neutral-300">
              {TAGLINE}
            </Typography>
            <div className="flex gap-5">
              {SOCIAL.map(({ name, href, icon }) => (
                <a key={name} href={href} className="opacity-90 transition hover:opacity-100">
                  <Image src={icon} alt={name} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <Typography variant="h4" className="font-semibold text-neutral-300">
              About Us
            </Typography>
            <ul className="space-y-3">
              {ABOUT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[15px] text-neutral-300 transition hover:text-white">
                    <Typography variant="body-lg" className="text-neutral-300 transition hover:text-white">{label}</Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <Typography variant="h4" className="font-semibold text-neutral-300">
              Products
            </Typography>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[15px] text-neutral-300 transition hover:text-white">
                    <Typography variant="body-lg" className="text-neutral-300 transition hover:text-white">{label}</Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <Typography variant="h4" className="font-semibold text-neutral-300">
              Contact Us
            </Typography>
            <ul className="space-y-4 text-[15px] text-neutral-300">
              <li className="flex items-start gap-3">
                <Image src="/footericons/location.png" alt="" width={18} height={18} className="mt-0.5 shrink-0" />
                <Typography variant="body-lg" className="max-w-[280px] leading-relaxed text-neutral-300">
                  Skanda Mansion, JSS Circle 748/41, Kanakapura Rd, 7th Block,
                  Jayanagar Bangalore, Karnataka 560070, India
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <Image src="/footericons/phone.png" alt="" width={18} height={18} className="mt-0.5 shrink-0" />
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="transition hover:text-white">
                  <Typography variant="body-lg" className="text-neutral-300 transition hover:text-white">{PHONE}</Typography>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Image src="/footericons/mail.png" alt="" width={18} height={18} className="mt-0.5 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="transition hover:text-white">
                  <Typography variant="body-lg" className="text-neutral-300 transition hover:text-white">{EMAIL}</Typography>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-600">
        <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 py-5 lg:max-w-[1800px] md:flex-row">

          <Typography variant="body-sm" className="text-neutral-300">
            © 2026 Neeladhri Ceramics. All rights reserved.
          </Typography>

          <div className="flex gap-8 text-sm text-neutral-300">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} className="transition hover:text-white">
                <Typography variant="body-sm" className="text-neutral-300 transition hover:text-white">{label}</Typography>
              </Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}