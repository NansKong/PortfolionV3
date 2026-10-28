import React from "react";

interface UnscrambleTextProps {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  triggerOnHover?: boolean;
}

export default function UnscrambleText({ text, className = "", as: Component = "span" }: UnscrambleTextProps) {
  return <Component className={className}>{text}</Component>;
}
