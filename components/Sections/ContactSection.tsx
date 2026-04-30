"use client";

import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { contactImages, contactBorderColor } from "@/lib/constants/Contact";

export default function ContactSection() {
  const { theme } = useTheme();
  const images = contactImages(theme);
  const borderColor = contactBorderColor(theme);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Image
        src={images.background}
        alt="Contact Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/15" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-white space-y-8">
          <div>
            <Typography variant="display-xl" className="text-white font-light mb-4">
              Get in Touch
            </Typography>

            <Typography variant="body-lg" className="text-white/80 leading-relaxed max-w-xl">
              Whether you're designing a home, a commercial space,
              or sourcing high-quality tiles. Needladri Ceramics
              is here to support your vision with precision and style.
            </Typography>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-white/80 text-sm">

            <div className="flex items-start gap-3">
              <span className="text-lg">📍</span>
              <Typography variant="body-sm" className="text-white/80">
                Skanda Mansion, JSS Rd<br />
                748/41, Kanakapura Rd<br />
                Bangalore, Karnataka
              </Typography>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span>📞</span>
                <Typography variant="body-sm" className="text-white/80">
                  +91 080 26772477
                </Typography>
              </div>

              <div className="flex items-center gap-3">
                <span>✉️</span>
                <Typography variant="body-sm" className="text-white/80">
                  info@needladri.com
                </Typography>
              </div>
            </div>
          </div>

          <Typography variant="body-lg" className="text-white/90">
            Have a question about our service?<br />
            We're here to help, contact us today.
          </Typography>

          <form className="space-y-5 max-w-md">
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
              className="w-full bg-[#7E7669A6] border-2 px-4 py-3 text-white placeholder:text-white focus:outline-none"
              style={{ borderColor }}
            />
          </form>
        </div>
        <div className="relative w-full max-w-lg mx-auto">
          <Image
            src={images.contactImage}
            alt="Modern Bathroom Interior"
            width={500}
            height={600}
            className="object-contain w-full h-auto border-2"
            style={{ borderColor }}
          />
        </div>
      </div>
      <div className="relative z-10 flex justify-center pb-16">
        <button
          className="px-10 py-3 border-4 border-[#7E7669] bg-gray-200/70 text-black rounded-full hover:bg-white transition"
        >
          Send Your Message
        </button>
      </div>
    </section>
  );
}