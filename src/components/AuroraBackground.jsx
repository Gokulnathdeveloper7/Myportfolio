import React from 'react';

export function AuroraBackground({ children, className = "" }) {
  return (
    <main
      className={`relative flex flex-col h-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform flex justify-center [filter:blur(50px)]">
          <div className="absolute top-[-10%] h-[50vh] w-[50vw] rounded-full bg-blue-300 dark:bg-blue-900 mix-blend-multiply dark:mix-blend-lighten blur-[100px] animate-aurora-1" />
          <div className="absolute top-[20%] h-[40vh] w-[40vw] rounded-full bg-indigo-300 dark:bg-indigo-800 mix-blend-multiply dark:mix-blend-lighten blur-[100px] animate-aurora-2" />
          <div className="absolute top-[50%] h-[60vh] w-[40vw] rounded-full bg-sky-300 dark:bg-sky-700 mix-blend-multiply dark:mix-blend-lighten blur-[100px] animate-aurora-3" />
        </div>
      </div>
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </main>
  );
}
