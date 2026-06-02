"use client";
import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  baseDelay?: number;
  stagger?: number;
}

export default function StaggerGrid({ children, className = "", style, baseDelay = 0, stagger = 80 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const kids = Array.from(container.children) as HTMLElement[];
    kids.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(22px)";
      child.style.transition = `opacity .55s ease ${baseDelay + i * stagger}ms, transform .55s ease ${baseDelay + i * stagger}ms`;
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          kids.forEach(child => {
            child.style.opacity = "1";
            child.style.transform = "none";
          });
          io.unobserve(container);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -20px 0px" }
    );

    io.observe(container);
    return () => io.disconnect();
  }, [baseDelay, stagger]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
