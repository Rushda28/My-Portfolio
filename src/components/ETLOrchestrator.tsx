"use client";
import React, { useState, useEffect } from 'react';

const RAW_DATA = [
  { id: 1, user: "rushda_r", status: "pending", val: "200000.50" },
  { id: 2, user: "system_admin", status: "ERROR", val: "null" },
  { id: 3, user: "guest_user", status: "success", val: "1500" },
];

export default function ETLOrchestrator() {
  const [stage, setStage] = useState<'EXTRACT' | 'TRANSFORM' | 'LOAD'>('EXTRACT');
  const [isProcessing, setIsProcessing] = useState(false);

  const runPipeline = () => {
    setIsProcessing(true);
    setStage('EXTRACT');
    
    setTimeout(() => setStage('TRANSFORM'), 1500);
    setTimeout(() => setStage('LOAD'), 3000);
    setTimeout(() => setIsProcessing(false), 4500);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xs font-mono text-[#2d2d2d]">
      <div className="text-[9px] uppercase tracking-[0.3em] opacity-40 mb-8">Pipeline State: {stage}</div>
      
      <div className="relative w-full h-40 border border-[#2d2d2d]/10 rounded-sm overflow-hidden bg-white/20">
        {/* Animated Data Particles */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${isProcessing ? 'opacity-100' : 'opacity-20'}`}>
          {stage === 'EXTRACT' && <div className="text-[10px]">READING RAW_JSON...</div>}
          {stage === 'TRANSFORM' && <div className="text-[10px] text-blue-600 animate-pulse">CLEANING & MAPPING...</div>}
          {stage === 'LOAD' && <div className="text-[10px] text-green-600 font-bold">WRITING TO SQL_DB</div>}
        </div>
        
        {/* Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-1 bg-[#2d2d2d] transition-all duration-500" 
          style={{ width: stage === 'EXTRACT' ? '33%' : stage === 'TRANSFORM' ? '66%' : '100%' }}
        />
      </div>

      <button 
        disabled={isProcessing}
        onClick={runPipeline}
        className="mt-8 px-8 py-3 bg-[#2d2d2d] text-[#f2ede4] text-[10px] uppercase tracking-widest hover:opacity-80 transition-all disabled:opacity-30"
      >
        {isProcessing ? "Processing..." : "Trigger Pipeline"}
      </button>
    </div>
  );
}