"use client";
import React, { useState } from "react";
import ContactShutter from "../components/ContactShutter";
import ExperimentCard from "../components/ExperimentCard";
import LogicEngine from "../components/LogicEngine"; 
import LogicOracle from "../components/LogicOracle";
import ETLOrchestrator from "../components/ETLOrchestrator";
import RateLimiter from "../components/RateLimiter";
import FileFlow from "../components/FileFlow";
import DataMiner from "../components/DataMiner";
import MotionShutter from "../components/MotionShutter";

export default function Home() {
  const [isShutterOpen, setIsShutterOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#f2ede4] text-[#2d2d2d] px-6 md:px-24 font-serif selection:bg-[#2d2d2d] selection:text-[#f2ede4]">
      
      {/* 1. CONTACT/ABOUT SHUTTER */}
      <ContactShutter isOpen={isShutterOpen} onClose={() => setIsShutterOpen(false)} />

      {/* 2. GLOBAL NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full p-10 md:p-14 flex justify-between items-center z-50 bg-[#f2ede4]/80 backdrop-blur-sm">
        <div className="text-3xl font-bold tracking-tighter italic">R</div>
        <div className="flex gap-10 md:gap-16 text-lg md:text-xl uppercase tracking-[0.3em] font-sans font-bold">
          <a href="#work" className="hover:opacity-50 transition-opacity">Case Studies</a>
          <a href="#experiments" className="hover:opacity-50 transition-opacity">Experiments</a>
          <button 
            onClick={() => setIsShutterOpen(true)} 
            className="hover:opacity-50 transition-opacity uppercase tracking-[0.3em]"
          >
            Profile
          </button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="h-screen flex flex-col justify-center relative">
        <div className="max-w-7xl pt-20">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-8 opacity-50 font-sans">
            Software Developer & Analyst // 2026
          </p>
          <div className="flex flex-col mb-12">
            <h1 className="text-7xl md:text-9xl font-light tracking-tight leading-tight">Rushda</h1>
            <h1 className="text-7xl md:text-9xl font-normal italic -mt-4 md:-mt-8 opacity-90" style={{ fontFamily: "'Cormorant Upright', serif" }}>
              Ramzee.
            </h1>
          </div>
          <button onClick={() => setIsShutterOpen(true)} className="group flex items-center gap-6 px-10 py-5 bg-[#2d2d2d] text-[#f2ede4] rounded-sm transition-all hover:gap-12 shadow-xl">
            <span className="text-xs uppercase tracking-[0.4em] font-sans font-bold">About Me</span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </section>

      {/* 4. CASE STUDIES SECTION */}
      <section id="work" className="py-40 border-t border-[#dcd6ca]">
        <div className="flex justify-between items-end mb-32">
            <h2 className="text-5xl md:text-7xl italic font-light tracking-tight">Case Studies</h2>
            <p className="text-xs uppercase tracking-[0.4em] opacity-40 font-sans pb-4">Selected Works</p>
        </div>
        <div className="flex flex-col gap-48">
         <ProjectBlock 
            num="01" 
            title="ESSSL Digital Library" 
            category="PHP / MySQL / Backend Engineering" 
            description="A cloud-integrated library management system featuring secure authentication and dynamic resource cataloging."
            link="http://rushda.free.je/"
            image="/images/Library.png"
          />
         <ProjectBlock 
            num="02" 
            title="Ticketing Marketplace" 
            category="Node.js / Express / React Engineering" 
            description="A real-time event booking ecosystem built with React, Express.js, and Node.js featuring secure transaction processing."
           link = "https://event-marketplace-xi.vercel.app/"
           image="/images/Pulsepass.png"
          />
          <ProjectBlock 
         num="03" 
         title="Lumière Skincare E-Commerce" 
        category="React / Tailwind CSS / Frontend Engineering" 
          description="A high-end, minimalist e-commerce platform built with React, Tailwind CSS, and Vercel. Features dynamic product filtering, responsive grid layouts, and seamless routing."
          link = "https://lumiere-skincare-kappa.vercel.app/"
          image="/images/Lumiere.png"
          />
        </div>
      </section>

      {/* 5. EXPERIMENTS SECTION - Horizontal Scroll */}
      <section id="experiments" className="py-40 border-t border-[#dcd6ca] bg-[#f2ede4] overflow-hidden">
        <div className="px-6 md:px-24 flex justify-between items-end mb-24">
          <h2 className="text-6xl md:text-8xl italic font-light tracking-tighter">Experiments</h2>
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 font-sans pb-4">Lab // 2026</p>
        </div>

        <div className="flex gap-12 md:gap-20 overflow-x-auto px-6 md:px-24 pb-20 no-scrollbar">
         <ExperimentCard 
  num="01" 
  title="Binary Oracle" 
  description="Recursive Binary Search Tree logic engine for automated technical deduction." 
  bgColor="#2d2d2d"
>
  <LogicOracle />
</ExperimentCard>

          <ExperimentCard 
          num="02" 
          title="File Flow" 
         description="Automated Python-driven directory orchestration for structural organization." 
        bgColor="#7df9de"
         >
        <FileFlow />
        </ExperimentCard>

          <ExperimentCard 
          num="03" 
          title="Data Miner" 
          description="Node.js puppeteer script for structural data extraction from unstructured web sources." 
          bgColor="#e8e2d6"
          >
          <DataMiner />
</ExperimentCard>

          <ExperimentCard 
          num="04" 
          title="Motion Shutter" 
          description="Framer Motion implementation of vertical shutter transitions for high-end editorial UI." 
          bgColor="#2d2d2d"
>
        <MotionShutter />
</ExperimentCard>

          <ExperimentCard 
          num="05" 
          title="Logic Engine" 
          description="A recursive decision engine for classifying data architecture paths." 
          bgColor="#2d2d2d"
>
        <LogicEngine />
        </ExperimentCard>

        <ExperimentCard 
      num="06" 
       title="ETL Orchestrator" 
       description="Automated pipeline for cleaning and structuring raw data into relational schemas." 
      bgColor="#7df9de"
>
     <ETLOrchestrator />
    </ExperimentCard>

    <ExperimentCard 
    num="07" 
    title="Rate Limiter" 
    description="Token Bucket algorithm implemented to manage API traffic and system load." 
    bgColor="#1a1a1a"
    >
  <RateLimiter />
</ExperimentCard>
        </div>
      </section>

     {/* 6. FOOTER */}
<footer className="py-32 -mx-6 md:-mx-24 bg-[#2d2d2d] text-[#f2ede4] flex flex-col items-center">
  <div className="text-6xl mb-14 italic font-bold">R</div>
  
  <div className="flex gap-12 mb-14 font-sans text-[13px] uppercase tracking-[0.5em] font-medium opacity-60">
  <a 
    href="mailto:rushdaramzin@example.com" 
    className="hover:opacity-100 transition-opacity duration-300"
  >
    Email
  </a>
  <a 
    href="https://github.com/Rushda28" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:opacity-100 transition-opacity duration-300"
  >
    GitHub
  </a>
</div>

  <div className="text-center opacity-40 text-[13px] uppercase tracking-[0.3em] font-sans">
    © 2026 // Rushda Ramzee // Colombo, Sri Lanka
  </div>
</footer>
    </main>
  );
}

function ProjectBlock({ num, title, category, description, link, image }: any) {
 return (
    <div className="group grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
      <div className="md:col-span-1 text-xs font-sans opacity-30 mt-6">{num}</div>
      <div className="md:col-span-6">
       <div className="aspect-video bg-[#e8e2d6] border border-[#dcd6ca] flex items-center justify-center group-hover:bg-[#dcd6ca] transition-colors duration-700">
    <span className="text-[120px] font-light text-[#2d2d2d] opacity-20">
  {title.charAt(0)}
</span>
  </div>
      </div>
      <div className="md:col-span-5 pt-6 flex flex-col">
        <h3 className="text-5xl md:text-6xl tracking-tighter mb-6 group-hover:italic transition-all duration-500">{title}</h3>
        <p className="text-xs uppercase tracking-[0.5em] opacity-40 mb-8 font-sans">{category}</p>
        <p className="text-base italic opacity-60 max-w-sm mb-10 leading-relaxed">{description}</p>
        
        {/* Wrap the button in a link tag */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-fit"
        >
          <button className="flex items-center gap-6 px-10 py-5 border border-[#2d2d2d] text-xs uppercase tracking-[0.4em] font-sans font-bold hover:bg-[#2d2d2d] hover:text-[#f2ede4] transition-all">
            View Website ↗
          </button>
        </a>
      </div>
    </div>
  );
}