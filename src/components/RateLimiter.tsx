"use client";
import React, { useState, useEffect } from 'react';

export default function RateLimiter() {
  const [tokens, setTokens] = useState(5); 
  const [status, setStatus] = useState<'READY' | 'SUCCESS' | 'BLOCKED'>('READY');
  const MAX_TOKENS = 8;

  useEffect(() => {
    const refill = setInterval(() => {
      setTokens((prev) => (prev < MAX_TOKENS ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(refill);
  }, []);

  const handleRequest = () => {
    if (tokens > 0) {
      setTokens(tokens - 1);
      setStatus('SUCCESS');
      setTimeout(() => setStatus('READY'), 500);
    } else {
      setStatus('BLOCKED');
      setTimeout(() => setStatus('READY'), 1000);
    }
  };

  return (
    <div className="flex flex-col items-center font-mono text-[#f2ede4]">
      <div className="text-[9px] uppercase tracking-[0.4em] opacity-40 mb-10">
        System Protocol: Rate Limiter
      </div>

      {/* Visual Bucket */}
      <div className="relative w-24 h-32 border-2 border-[#f2ede4]/20 rounded-b-xl flex flex-col-reverse p-1 gap-1">
        {Array.from({ length: tokens }).map((_, i) => (
          <div key={i} className="w-full h-3 bg-[#7df9de] rounded-sm animate-pulse" />
        ))}
        {tokens === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-[10px] text-red-400 animate-bounce uppercase font-bold">
            Empty
          </div>
        )}
      </div>

      <div className="mt-8 text-center h-6">
        {status === 'BLOCKED' && <span className="text-red-400 text-[10px] tracking-widest uppercase">429: Too Many Requests</span>}
        {status === 'SUCCESS' && <span className="text-[#7df9de] text-[10px] tracking-widest uppercase">Request Validated</span>}
      </div>

      <button 
        onClick={handleRequest}
        className={`mt-6 px-10 py-4 border text-[10px] uppercase tracking-widest transition-all ${
          status === 'BLOCKED' ? 'border-red-400 text-red-400' : 'border-[#f2ede4] hover:bg-[#f2ede4] hover:text-[#2d2d2d]'
        }`}
      >
        API Call
      </button>
      
      <p className="mt-6 text-[10px] opacity-30 italic">Tokens available: {tokens}/{MAX_TOKENS}</p>
    </div>
  );
}