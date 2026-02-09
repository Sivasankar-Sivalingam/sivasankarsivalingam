"use client";
import { useState, useRef, useEffect } from "react";

/**
 * HOOK: UseIntersectionObserver
 * Triggers animations when elements enter viewport
 */
export const useScrollReveal = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return { ref, isVisible: isIntersecting };
};
