"use client";
import React, { useState } from "react";

const MOCK_SCRAPE_LOGS = [
  "CONNECTING TO INSTANCE...",
  "PARSING DOM STRUCTURE...",
  "EXTRACTING: <div>.product_price",
  "EXTRACTING: <span>.stock_status",
  "MAPPING TO JSON OBJECT...",
  "DONE: 200 OK"
];

export default function DataMiner() {
  const [isMining, setIsMining] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const startMining = () => {
    setIsMining(true);
    setLogs([]);
    
    MOCK_SCRAPE_LOGS.forEach((msg, i) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, msg]);
        if (i === MOCK_SCRAPE_LOGS.length - 1) setIsMining(false);
      }, i * 700);
    });
  };

  return (
    <div className="flex flex-col items-center w-full max-w-55 font-mono text-[#2d2d2d]">
      <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 mb-6">Puppeteer Scraper v1.0</p>
      
      <div className="w-full h-44 bg-[#2d2d2d] rounded-md p-3 overflow-hidden shadow-inner flex flex-col gap-1">
        {logs.length === 0 && !isMining && (
          <div className="flex items-center justify-center h-full opacity-20 text-[#f2ede4] text-[10px]">
            {"{...} AWAITING COMMAND"}
          </div>
        )}
        
        {logs.map((log, i) => (
          <div key={i} className="text-[8px] text-[#7df9de] leading-tight animate-in slide-in-from-left duration-300">
            <span className="opacity-40 mr-2">{">"}</span> {log}
          </div>
        ))}

        {isMining && (
          <div className="w-1 h-3 bg-[#7df9de] animate-pulse mt-1" />
        )}
      </div>

      <button
        onClick={startMining}
        disabled={isMining}
        className="mt-6 px-6 py-2 border border-[#2d2d2d] text-[9px] uppercase tracking-widest hover:bg-[#2d2d2d] hover:text-[#f2ede4] transition-all disabled:opacity-20"
      >
        {isMining ? "Extracting..." : "Execute Miner"}
      </button>

      {logs.length > 0 && !isMining && (
        <div className="mt-4 text-[10px] bg-[#2d2d2d] text-[#f2ede4] px-2 py-1 rounded">
          <span className="text-[#7df9de]">Output:</span> structured_data.json
        </div>
      )}
    </div>
  );
}