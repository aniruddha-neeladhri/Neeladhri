"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import {
  cancelHomepageSectionScroll,
  clearHomepageScrollTarget,
  isReturningToHomeBrands,
  pinPageToTop,
  recordPathChange,
} from "@/lib/homepageNavigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    recordPathChange(pathname);

    if (pathname === "/" && isReturningToHomeBrands()) {
      cancelHomepageSectionScroll();
      window.scrollTo(0, 0);
      return;
    }

    cancelHomepageSectionScroll();

    if (pathname !== "/" && !pathname.startsWith("/brands/")) {
      clearHomepageScrollTarget();
    }

    pinPageToTop();
  }, [pathname]);

  return null;
}
