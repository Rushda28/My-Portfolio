"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    setIsMounted(true);
    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [mouseX, mouseY]);

  const x = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const y = useSpring(mouseY, { stiffness: 400, damping: 40 });

  if (!isMounted) return null;

  return (
    <motion.div
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        position: "fixed", 
        left: 0,
        pointerEvents: "none",
        zIndex: 999999, 
      }}
    >
      {/* Outer ring */}
      <div className="w-8 h-8 border border-[#2d2d2d] rounded-full flex items-center justify-center">
         {/* Center dot */}
         <div className="w-1 h-1 bg-[#2d2d2d] rounded-full" />
      </div>
    </motion.div>
  );
}