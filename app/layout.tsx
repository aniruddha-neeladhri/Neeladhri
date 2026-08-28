import type { Metadata } from "next";
import "./globals.css";
import { fontVariableClassNames } from "@/lib/fonts";

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

import ScrollTriggeredNavbar from "@/components/layout/ScrollTriggeredNavbar";
import Footer from "@/components/layout/Footer";
import SiteChatbot from "@/components/layout/SiteChatbot";
import ThemeWrapper from "@/components/layout/ThemeWrapper";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { ThemeProvider } from "@/lib/contexts/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontVariableClassNames} theme-premium`}>
      <body className="antialiased theme-premium">
        <ThemeProvider>
          <ThemeWrapper />
          <ScrollToTop />
          <ScrollTriggeredNavbar />
          {children}
          <Footer />
          <SiteChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}