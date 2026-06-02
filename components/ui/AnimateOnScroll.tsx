"use client";
import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  direction?: "up" | "left" | "none";
}

export default function AnimateOnScroll({
  children, delay = 0, className = "", style = {}, direction = "up"
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "none";
          }, delay);
          io.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -28px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const initial = direction === "up" ? "translateY(24px)" : direction === "left" ? "translateX(-16px)" : "none";

  return (
    <div ref={ref} className={`anim-init ${className}`} style={{
      transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}
