import React from 'react';
import { Link } from 'react-router-dom';
import BlurText from '../components/reactbits/BlurText';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <BlurText text="404" className="text-7xl md:text-9xl font-black text-blue-500 justify-center mb-4" />
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Page Not Found</h1>
      <p className="text-slate-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-colors shadow-sm">
        Return to Home
      </Link>
    </div>
  );
}
