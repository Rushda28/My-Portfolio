"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactShutter({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-100 bg-[#f2ede4] overflow-y-auto no-scrollbar"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="fixed top-14 right-10 md:right-24 text-3xl hover:rotate-90 transition-transform duration-500 z-110"
          >
            ✕
          </button>

          <div className="max-w-5xl mx-auto py-32 px-8 font-sans">
            <h2 className="text-7xl font-serif italic mb-16 tracking-tight">The Lab.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              {/* Left Column: The Statement */}
              <div className="md:col-span-7 space-y-10">
                <p className="text-2xl leading-relaxed font-light italic opacity-90">
                  "I don't just build interfaces. I architect the logic that powers them."
                </p>
                
                <div className="space-y-6 text-base leading-relaxed opacity-70 max-w-xl">
                  <p>
                    As a Software Engineering undergraduate, my work is centered on 
                    **Backend Infrastructure** and **Data Analytics**. I specialize in 
                    writing code that manages complexity—from recursive decision engines 
                    to high-throughput data pipelines.
                  </p>
                  <p>
                    My technical philosophy is built on **System Integrity**. I believe 
                    the strength of a platform is measured by its edge cases—how it 
                    handles traffic spikes, how it cleans unstructured data, and how 
                    efficiently it traverses deep logic trees.
                  </p>
                </div>

               
              </div>

            
              <div className="md:col-span-5 flex flex-col gap-12 border-l border-[#2d2d2d]/10 pl-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.5em] opacity-40 mb-6">Core Stack</h4>
                  <div className="grid grid-cols-2 gap-y-4 text-sm font-bold tracking-tight">
                    
                    <span>Java (OOP)</span>
  <span>Python</span>
  <span>PHP</span>
  <span>SQL / PostgreSQL</span>
  <span>Node.js / Express</span>
  <span>React / Next.js</span>
  <span>Power BI</span>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}