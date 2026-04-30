import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const robotoSlab = localFont({
  src: [
    {
      path: "./Fonts/RobotoSlab-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neeladhri Ceramics - Premium Ceramic Solutions",
  description:
    "Neeladhri Ceramics delivers premium quality ceramic products crafted with precision, durability, and elegance.",
  keywords: [
    "Neeladhri Ceramics",
    "ceramic products",
    "tiles",
    "premium ceramics",
    "ceramic manufacturer",
  ],
  authors: [{ name: "Neeladhri Ceramics" }],
  creator: "Neeladhri Ceramics",
  publisher: "Neeladhri Ceramics",
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Neeladhri Ceramics - Premium Ceramic Solutions",
    description:
      "Premium ceramic products crafted with precision and durability.",
    // url: "https://yourdomain.com",
    siteName: "Neeladhri Ceramics",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Neeladhri Ceramics Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Neeladhri Ceramics - Premium Ceramic Solutions",
    description:
      "Premium ceramic products crafted with precision and durability.",
    images: ["/logo.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" }, // from /app
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import ScrollTriggeredNavbar from "@/components/SharedSections/ScrollTriggeredNavbar";
import Footer from "@/components/SharedSections/Footer";
import ThemeWrapper from "@/components/SharedSections/ThemeWrapper";
import { ThemeProvider } from "@/lib/contexts/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoSlab.variable}>
      <body className="antialiased">
        <ThemeProvider>
          <ThemeWrapper />
          <ScrollTriggeredNavbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}