import React from "react";
import { cn } from "@/lib/utils";

export function GlitchText({ text, className }) {
  return (
    <div className={cn("relative inline-block font-bold", className)}>
      <span className="relative z-10 text-foreground mix-blend-normal">
        {text}
      </span>
      <span
        className="absolute top-0 left-[-2px] z-0 opacity-80 mix-blend-screen text-red-500 animate-[glitch_2s_infinite]"
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="absolute top-0 left-[2px] z-0 opacity-80 mix-blend-screen text-blue-500 animate-[glitch_3s_infinite_reverse]"
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );
}
