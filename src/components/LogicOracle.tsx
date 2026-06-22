"use client";
import React, { useState } from "react";

const oracleTree = {
  node: "System Architecture",
  question: "Is your priority real-time data?",
  left: {
    node: "Frontend Focus",
    question: "Requires a dynamic UI state?",
    left: { node: "React / Next.js", isLeaf: true },
    right: { node: "Vanilla JS / GSAP", isLeaf: true }
  },
  right: {
    node: "Backend Focus",
    question: "Handling heavy data streams?",
    left: { node: "Python (Pandas/ETL)", isLeaf: true },
    right: { node: "Node.js (Puppeteer)", isLeaf: true }
  }
};

export default function LogicOracle() {
  const [current, setCurrent] = useState<any>(oracleTree);
  const [history, setHistory] = useState<any[]>([]);

  const walk = (direction: 'left' | 'right') => {
    setHistory([...history, current]);
    setCurrent(current[direction]);
  };

  const reset = () => {
    setCurrent(oracleTree);
    setHistory([]);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-55 font-mono text-[#f2ede4]">
      <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 mb-6">BST Recursive Engine</p>
      
      <div className="relative w-full aspect-square border border-[#f2ede4]/10 rounded-full flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-white/5">
        
        {!current.isLeaf ? (
          <div className="animate-in fade-in zoom-in duration-500">
            <span className="text-[8px] opacity-40 block mb-2">DEPTH: {history.length}</span>
            <h3 className="text-xs md:text-sm leading-tight italic">{current.question}</h3>
            
            <div className="flex gap-4 mt-6 justify-center">
              <button 
                onClick={() => walk('left')}
                className="w-10 h-10 rounded-full border border-[#f2ede4]/20 hover:bg-[#f2ede4] hover:text-[#2d2d2d] transition-all text-[8px] uppercase"
              >
                L
              </button>
              <button 
                onClick={() => walk('right')}
                className="w-10 h-10 rounded-full border border-[#f2ede4]/20 hover:bg-[#f2ede4] hover:text-[#2d2d2d] transition-all text-[8px] uppercase"
              >
                R
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom duration-500">
            <p className="text-[8px] opacity-40 uppercase mb-2">Optimal Path Found:</p>
            <h3 className="text-lg font-bold text-[#7df9de] leading-none">{current.node}</h3>
            <button 
              onClick={reset}
              className="mt-6 text-[8px] underline opacity-40 hover:opacity-100 uppercase"
            >
              Re-traverse
            </button>
          </div>
        )}

        {/* Visual Path Visualization */}
        <div className="absolute bottom-4 flex gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-1 h-1 rounded-full ${i <= history.length ? 'bg-[#7df9de]' : 'bg-[#f2ede4]/10'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}