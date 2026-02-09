"use client";
import React, { useState, useEffect } from "react";

/**
 * COMPONENT: Custom Cursor
 */
export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };

    const mMove = (el: { clientX: any; clientY: any; target: any }) => {
      setPosition({ x: el.clientX, y: el.clientY });

      // Check if hovering over a clickable element
      const target = el.target;
      setLinkHovered(
        target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button"),
      );
    };

    const mEnter = () => setHidden(false);
    const mLeave = () => setHidden(true);
    const mDown = () => setClicked(true);
    const mUp = () => setClicked(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className="fixed z-9999 pointer-events-none hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`
          absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white mix-blend-difference transition-all duration-300 ease-out
          ${linkHovered ? "w-12 h-12 bg-white/20" : "w-8 h-8"}
          ${clicked ? "scale-75" : "scale-100"}
          ${hidden ? "opacity-0" : "opacity-100"}
        `}
      />
      <div
        className={`
          absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-full mix-blend-difference transition-all duration-100
          ${hidden ? "opacity-0" : "opacity-100"}
          w-2 h-2
        `}
      />
    </div>
  );
};
