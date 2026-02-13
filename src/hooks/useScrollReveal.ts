import { useEffect, useState } from "react";
import type { RefObject } from "react";
import { useDisableMotion } from "./useDisableMotion";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {}
) {
  const disableMotion = useDisableMotion(768);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.1, rootMargin = "0px" } = options;

  useEffect(() => {
    // ✅ Mobile/reduce-motion: không observe nữa
    if (disableMotion) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // ✅ tránh re-render nếu state không đổi
        setIsVisible((prev) =>
          prev === entry.isIntersecting ? prev : entry.isIntersecting
        );
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, disableMotion]);

  // ✅ override output trên mobile/reduce-motion (khỏi setState trong effect)
  return disableMotion ? true : isVisible;
}