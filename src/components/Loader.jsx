import React from 'react';

export default function Loader({ isLoading }) {
  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="w-14 h-14 border-[3px] border-slate-200 border-t-blue-500 rounded-full animate-spin mb-6"></div>
      <div className="text-xl font-black text-slate-800 tracking-widest mb-1">GOKUL NATH J</div>
      <div className="text-xs text-slate-400 tracking-[0.2em] font-medium uppercase">
        Loading Portfolio...
      </div>
    </div>
  );
}
