"use client";
import React, { useState } from "react";

const MOCK_FILES = [
  { name: "sales_report.csv", type: "DATA" },
  { name: "bank_statement.pdf", type: "FINANCE" },
  { name: "monthly_targets.xlsx", type: "FINANCE" },
  { name: "system_logs.txt", type: "LOGS" },
  { name: "onboarding.docx", type: "HR" },
];

export default function FileFlow() {
  const [isScanning, setIsScanning] = useState(false);
  const [sortedCount, setSortedCount] = useState(0);

  const startOrchestration = () => {
    setIsScanning(true);
    setSortedCount(0);
    
    const interval = setInterval(() => {
      setSortedCount((prev) => {
        if (prev >= MOCK_FILES.length) {
          clearInterval(interval);
          setIsScanning(false);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
  };

  return (
    <div className="flex flex-col items-center font-mono text-[#2d2d2d] w-full max-w-50">
      <p className="text-[9px] uppercase tracking-[0.3em] opacity-50 mb-6">
        Directory Orchestrator
      </p>

      <div className="relative w-full aspect-square bg-[#2d2d2d]/5 rounded-xl flex flex-col items-center justify-center p-4 overflow-hidden border border-[#2d2d2d]/10">
        {isScanning ? (
          <div className="w-full space-y-2 animate-in fade-in duration-500">
            {MOCK_FILES.map((file, i) => (
              <div 
                key={i} 
                className={`text-[8px] flex justify-between transition-opacity duration-300 ${i < sortedCount ? 'opacity-100' : 'opacity-20'}`}
              >
                <span>{file.name}</span>
                <span className="font-bold text-[#1e4d42]">→ {file.type}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="text-2xl mb-2">📁</div>
            <p className="text-[10px] opacity-40">System Idle</p>
          </div>
        )}
        
        {/* Scanning Line Effect */}
        {isScanning && (
          <div className="absolute top-0 left-0 w-full h-1 bg-[#2d2d2d]/20 animate-scan" />
        )}
      </div>

      <button
        onClick={startOrchestration}
        disabled={isScanning}
        className="mt-6 px-6 py-2 border border-[#2d2d2d] text-[9px] uppercase tracking-widest hover:bg-[#2d2d2d] hover:text-[#7df9de] transition-all disabled:opacity-20"
      >
        {isScanning ? "Orchestrating..." : "Run Python Script"}
      </button>

      {sortedCount > 0 && !isScanning && (
        <p className="mt-4 text-[9px] text-[#1e4d42] font-bold uppercase tracking-tighter">
          Successfully Organized {sortedCount} Files
        </p>
      )}
    </div>
  );
}