import { useEffect, useState } from "react";
import type { RefObject } from "react";
import { useDisableMotion } from "./useDisableMotion";

export function useParallax(speed: number = 0.5) {
  const disableMotion = useDisableMotion(768);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disableMotion) return;

    let raf = 0;

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.pageYOffset || 0;
        // ✅ tránh re-render nếu không đổi
        setOffset((prev) => (prev === y ? prev : y));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [disableMotion]);

  // ✅ không cần reset state; chỉ override giá trị trả về
  return disableMotion ? 0 : offset * speed;
}

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const disableMotion = useDisableMotion(768);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (disableMotion) return;

    let raf = 0;

    const compute = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = -elementHeight;
      const total = start - end;

      const current = elementTop - end;
      const p = 1 - Math.max(0, Math.min(1, current / total));

      setProgress((prev) => (prev === p ? prev : p));
    };

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref, disableMotion]);

  // ✅ override output trên mobile/reduce-motion, không cần setState trong effect
  return disableMotion ? 1 : progress; // bạn có thể đổi 1 thành 0 nếu hợp UI
}