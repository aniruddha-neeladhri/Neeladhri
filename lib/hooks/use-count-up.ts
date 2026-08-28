import { useEffect, useState } from "react";

const DEFAULT_DURATION = 2200;

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

/** Animated count-up when `start` becomes true. */
export function useCountUp(target: number, start: boolean, duration = DEFAULT_DURATION) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId = 0;
    let cancelled = false;
    const startTime = performance.now();

    const tick = (now: number) => {
      if (cancelled) return;
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(raw);
      const current = Math.round(eased * target);
      setCount(Math.min(current, target));
      if (raw < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame((now) => {
      setCount(0);
      tick(now);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [start, target, duration]);

  return count;
}
