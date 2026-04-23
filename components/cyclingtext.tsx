"use client";

import { useEffect, useState } from "react";

const WORDS = ["잠재성을 지닌", "가능성을 담은", "새로움을 향한", "실용적인"];

export function CyclingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setVisible(true);
      }, 800);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="grad-text"
      style={{
        display: "inline-block",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-8px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      {WORDS[index]}
    </span>
  );
}
