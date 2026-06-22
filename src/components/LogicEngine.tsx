"use client";
import React, { useState } from 'react';


const decisionGraph = {
  id: "root",
  label: "Is the data stream structured?",
  left: {
    id: "node_1",
    label: "Requires real-time processing?",
    left: { label: "Apache Kafka Pipeline" },
    right: { label: "PostgreSQL Database" }
  },
  right: {
    id: "node_2",
    label: "Source is unstructured text?",
    left: { label: "NoSQL (MongoDB) Store" },
    right: { label: "Binary File Storage" }
  }
};

export default function LogicEngine() {
  const [history, setHistory] = useState<any[]>([decisionGraph]);
  const current = history[history.length - 1];
  const isLeaf = !current.left && !current.right;

  const move = (direction: 'left' | 'right') => {
    if (current[direction]) {
      setHistory([...history, current[direction]]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 text-[#f2ede4] font-mono">
      <div className="mb-6 opacity-30 text-[10px] tracking-[0.4em] uppercase">
        Recursive Logic Traversal
      </div>
      
      <div className="h-32 flex items-center text-center">
        <h3 className="text-xl italic font-light leading-snug max-w-xs">
          {current.label}
        </h3>
      </div>

      {!isLeaf ? (
        <div className="flex gap-4 mt-8">
          <button 
            onClick={() => move('left')}
            className="px-6 py-2 border border-[#f2ede4]/30 hover:bg-[#f2ede4] hover:text-[#2d2d2d] transition-all text-[10px] uppercase tracking-widest"
          >
            True
          </button>
          <button 
            onClick={() => move('right')}
            className="px-6 py-2 border border-[#f2ede4]/30 hover:bg-[#f2ede4] hover:text-[#2d2d2d] transition-all text-[10px] uppercase tracking-widest"
          >
            False
          </button>
        </div>
      ) : (
        <button 
          onClick={() => setHistory([decisionGraph])}
          className="mt-8 text-[10px] underline opacity-50 hover:opacity-100 uppercase tracking-widest"
        >
          Reset Stack
        </button>
      )}
      
      {/* Visual representation of the Stack */}
      <div className="mt-12 flex gap-1">
        {history.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#f2ede4] opacity-20" />
        ))}
      </div>
    </div>
  );
}