export const HOMEPAGE_SCROLL_TARGET_KEY = "neeladhri-homepage-scroll-target";
const CURRENT_PATH_KEY = "neeladhri-current-path";
const PREVIOUS_PATH_KEY = "neeladhri-previous-path";

let sectionScrollRaf: number | null = null;
let sectionScrollTimeout: ReturnType<typeof setTimeout> | null = null;
let pinTopRaf: number | null = null;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function stopAllScrollJobs() {
  if (sectionScrollRaf !== null) {
    cancelAnimationFrame(sectionScrollRaf);
    sectionScrollRaf = null;
  }
  if (sectionScrollTimeout !== null) {
    clearTimeout(sectionScrollTimeout);
    sectionScrollTimeout = null;
  }
  if (pinTopRaf !== null) {
    cancelAnimationFrame(pinTopRaf);
    pinTopRaf = null;
  }
}

export function cancelHomepageSectionScroll() {
  stopAllScrollJobs();
}

function pinWindowToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function pinPageToTop(frames = 8) {
  stopAllScrollJobs();
  pinWindowToTop();
  let left = frames;
  const tick = () => {
    pinWindowToTop();
    left -= 1;
    if (left > 0) {
      pinTopRaf = requestAnimationFrame(tick);
    } else {
      pinTopRaf = null;
    }
  };
  pinTopRaf = requestAnimationFrame(tick);
}

export function setHomepageScrollTarget(sectionId: string) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(HOMEPAGE_SCROLL_TARGET_KEY, sectionId);
}

export function peekHomepageScrollTarget() {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(HOMEPAGE_SCROLL_TARGET_KEY);
}

export function clearHomepageScrollTarget() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(HOMEPAGE_SCROLL_TARGET_KEY);
}

export function recordPathChange(pathname: string) {
  if (typeof window === "undefined") return;
  const current = sessionStorage.getItem(CURRENT_PATH_KEY);
  if (current !== pathname) {
    sessionStorage.setItem(PREVIOUS_PATH_KEY, current ?? "");
    sessionStorage.setItem(CURRENT_PATH_KEY, pathname);
  }
}

function isPageReload() {
  if (typeof window === "undefined") return false;
  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  return nav?.type === "reload";
}

function isBrandDetailPath(path: string | null) {
  if (!path) return false;
  return path.startsWith("/brands/") && path !== "/brands/";
}

/** Only true for: homepage brand card → brand detail → back to homepage. */
export function isReturningToHomeBrands() {
  if (typeof window === "undefined") return false;
  if (isPageReload()) {
    clearHomepageScrollTarget();
    return false;
  }
  const previous = sessionStorage.getItem(PREVIOUS_PATH_KEY);
  return (
    peekHomepageScrollTarget() === "homebrands" && isBrandDetailPath(previous)
  );
}

const SMOOTH_SCROLL_MS = 1100;

export function scrollToHomepageSectionSmooth(sectionId: string) {
  stopAllScrollJobs();
  pinWindowToTop();

  const startWhenReady = () => {
    const el = document.getElementById(sectionId);
    if (!el) {
      sectionScrollRaf = requestAnimationFrame(startWhenReady);
      return;
    }

    const startY = window.scrollY;
    const targetY = el.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;
    if (Math.abs(distance) < 8) {
      clearHomepageScrollTarget();
      return;
    }

    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / SMOOTH_SCROLL_MS, 1);
      const y = startY + distance * easeInOutCubic(progress);
      window.scrollTo({ top: y, left: 0, behavior: "auto" });
      if (progress < 1) {
        sectionScrollRaf = requestAnimationFrame(step);
        return;
      }
      sectionScrollRaf = null;
      clearHomepageScrollTarget();
    };

    sectionScrollRaf = requestAnimationFrame(step);
  };

  sectionScrollTimeout = setTimeout(() => {
    sectionScrollTimeout = null;
    startWhenReady();
  }, 80);
}
