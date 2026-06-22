"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MotionShutter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full max-w-50 font-mono">
      <p className="text-[9px] uppercase tracking-[0.3em] text-[#f2ede4] opacity-40 mb-6">
        Motion Protocol: Shutter
      </p>

      {/* The Shutter Container */}
      <div 
        className="relative w-full h-40 bg-[#1a1a1a] rounded-sm overflow-hidden cursor-pointer group border border-[#f2ede4]/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hidden Content Behind the Shutter */}
        <div className="absolute inset-0 flex items-center justify-center text-[#7df9de] text-[10px] tracking-tighter text-center px-4">
          SYSTEM_ACCESS_GRANTED <br />
          LAYER_04_ACTIVE
        </div>

        {/* Top Shutter */}
        <motion.div 
          initial={false}
          animate={{ height: isOpen ? "0%" : "50%" }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="absolute top-0 left-0 w-full bg-[#f2ede4] z-10 border-b border-[#2d2d2d]/10"
        />

        {/* Bottom Shutter */}
        <motion.div 
          initial={false}
          animate={{ height: isOpen ? "0%" : "50%" }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="absolute bottom-0 left-0 w-full bg-[#f2ede4] z-10 border-t border-[#2d2d2d]/10"
        />
        
        {/* Hover Hint */}
        {!isOpen && (
          <div className="absolute inset-0 z-20 flex items-center justify-center text-[#2d2d2d] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest pointer-events-none">
            Unlock
          </div>
        )}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-6 text-[9px] uppercase tracking-widest text-[#f2ede4] opacity-60 hover:opacity-100 transition-all underline decoration-[#7df9de] underline-offset-4"
      >
        {isOpen ? "Reset Viewport" : "Trigger Transition"}
      </button>
    </div>
  );
}