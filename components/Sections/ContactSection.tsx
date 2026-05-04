"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { contactImages, contactBorderColor } from "@/lib/constants/Contact";
import { LocationIcon, PhoneIcon, EmailIcon } from "@/lib/constants/ContactIcons";

const PHONE = "+91 080 26772477";
const EMAIL = "info@needladri.com";

export default function ContactSection() {
  const { theme } = useTheme();
  const isLuxury = theme === "luxury";
  const images = contactImages(theme);
  const borderColor = contactBorderColor(theme);

  const iconColor = isLuxury ? "#F79440" : "white";

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      <Image
        src={images.background}
        alt="Contact Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between py-10 md:py-14 px-4 sm:px-8 lg:px-16">

        {/* ROW 1 — Heading */}
        <div className="max-w-[1400px] mx-auto w-full text-center lg:text-left">
          <Typography variant="display-xl" className="text-white font-light">
            Get in Touch
          </Typography>
        </div>

        {/* ROW 2 — Paragraph */}
        <div className="max-w-[1400px] mx-auto w-full mt-4 text-center lg:text-left">
          <Typography variant="body-xl" className="text-white leading-relaxed font-normal">
            Whether you're designing a home, a commercial space, or sourcing high-quality tiles.
            <br className="hidden md:block" />
            Needladri Ceramics is here to support your vision with precision and style.
          </Typography>
        </div>

        {/* ROW 3 — Contact info */}
        <div className="max-w-[1400px] mx-auto w-full mt-5">

          {/* MOBILE — below 768px: centered, one by one */}
          <div className="flex flex-col gap-4 md:hidden w-full items-center">

            <div className="flex items-start gap-3 w-full max-w-xs">
              <LocationIcon iconColor={iconColor} />
              <Typography variant="body-sm" className="text-white leading-relaxed">
                Skanda Mansion, JSS Circle<br />
                748/41, Kanakapura Rd, 7th Block, Jayanagar<br />
                Bangalore, Karnataka 560070, India
              </Typography>
            </div>

            <div className="flex items-center gap-3 w-full max-w-xs">
              <PhoneIcon iconColor={iconColor} />
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                <Typography variant="body-sm" className="text-white hover:text-neutral-300 transition">
                  {PHONE}
                </Typography>
              </a>
            </div>

            <div className="flex items-center gap-3 w-full max-w-xs">
              <EmailIcon iconColor={iconColor} />
              <a href={`mailto:${EMAIL}`}>
                <Typography variant="body-sm" className="text-white hover:text-neutral-300 transition">
                  {EMAIL}
                </Typography>
              </a>
            </div>

          </div>

          {/* TABLET + DESKTOP — 768px+: two cols */}
          <div className="hidden md:flex flex-row gap-16 lg:gap-24 justify-center lg:justify-start items-start">

            <div className="flex items-start gap-3">
              <LocationIcon iconColor={iconColor} />
              <Typography variant="body-lg" className="text-white leading-relaxed">
                Skanda Mansion, JSS Circle<br />
                748/41, Kanakapura Rd, 7th Block, Jayanagar<br />
                Bangalore, Karnataka 560070, India
              </Typography>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <PhoneIcon iconColor={iconColor} />
                <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                  <Typography variant="body-lg" className="text-white hover:text-neutral-300 transition">
                    {PHONE}
                  </Typography>
                </a>
              </div>
              <div className="flex items-start gap-3">
                <EmailIcon iconColor={iconColor} />
                <a href={`mailto:${EMAIL}`}>
                  <Typography variant="body-lg" className="text-white hover:text-neutral-300 transition">
                    {EMAIL}
                  </Typography>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* ROW 4 — Form left | Image right */}
        <div className="max-w-[1400px] mx-auto w-full mt-6 flex flex-col lg:flex-row items-center gap-5 lg:gap-6">

          {/* Left — CTA + Form */}
          <div className="w-full lg:w-[48%] flex flex-col gap-4 items-center lg:items-start">
            <Typography variant="body-xl" className="text-white/90 text-center lg:text-left w-full">
              Have a question about our service?<br />
              We're here to help, contact us today.
            </Typography>

            <form className="space-y-4 w-full max-w-lg mx-auto lg:mx-0">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#7E7669A6] border-2 px-4 py-3 text-white placeholder:text-white focus:outline-none"
                style={{ borderColor }}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#7E7669A6] border-2 px-4 py-3 text-white placeholder:text-white focus:outline-none"
                style={{ borderColor }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#7E7669A6] border-2 px-4 py-3 text-white placeholder:text-white focus:outline-none"
                style={{ borderColor }}
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full bg-[#7E7669A6] border-2 px-4 py-3 text-white placeholder:text-white focus:outline-none resize-none"
                style={{ borderColor }}
              />
            </form>
          </div>

          {/* Right — Image */}
          <div className="w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none lg:w-[52%] relative h-[400px] sm:h-[440px] md:h-[440px] lg:h-[540px]">
            <Image
              src={images.contactImage}
              alt="Modern Bathroom Interior"
              fill
              className="object-contain"
            />
          </div>

        </div>
        {/* ROW 5 — Send button */}
        <div className="flex justify-center mt-6">
          <button
            className={`px-10 py-3 border-4 ${
              isLuxury ? "border-[#F79440]" : "border-[#7E7669]"
            } bg-gray-200/70 text-black rounded-full cursor-pointer`}
          >
            Send Your Message
          </button>
        </div>

      </div>
    </section>
  );
}