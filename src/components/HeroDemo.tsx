"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ChevronRight,
  Eye,
  Code2,
  Sparkles,
  Terminal,
  Layers,
} from "lucide-react";
import CVModal from "../modals/CvModal";

function FloatingBadge({
  top,
  left,
  right,
  delay,
  icon,
  text,
}: {
  top?: string;
  left?: string;
  right?: string;
  delay: number;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 0.5, duration: 0.8 }}
      className="absolute z-0"
      style={{ top, left, right }}
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-md border border-white/10 shadow-xl text-[var(--text-muted)]"
      >
        <span className="text-[#007787]">{icon}</span>
        <span className="text-xs font-bold tracking-wider">{text}</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const googleDriveLink = "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[var(--nav-bg)] selection:bg-[#f15a2b] selection:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#007787]/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#f15a2b]/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        <FloatingBadge top="25%" left="15%" delay={0} icon={<Sparkles size={14} />} text="MongoDB" />
        <FloatingBadge top="65%" left="10%" delay={1.5} icon={<Terminal size={14} />} text="React.js" />
        <FloatingBadge top="20%" right="15%" delay={0.8} icon={<Layers size={14} />} text="Express" />
        <FloatingBadge top="70%" right="12%" delay={2.2} icon={<Code2 size={14} />} text="NodeJS" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center px-6">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-2 flex flex-col items-center">
          <motion.h2 variants={itemVariants} className="text-lg md:text-2xl font-bold text-[var(--text-muted)] tracking-[0.3em] uppercase mb-2">
            Hello, I am
          </motion.h2>

          <motion.h1 variants={itemVariants} className="w-full relative text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[var(--text-main)] to-[var(--text-muted)] tracking-tighter uppercase leading-none pb-2 italic">
            CLINT P S
            <span className="absolute inset-0 text-[#007787] blur-[30px] opacity-30 -z-10 mix-blend-screen" aria-hidden="true">CLINT P S</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mt-4">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#f15a2b]" />
            <span className="text-sm md:text-xl font-bold text-[#007787] tracking-widest uppercase bg-[#007787]/10 px-4 py-1 rounded-sm border border-[#007787]/20">
              Full Stack Architect
            </span>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#f15a2b]" />
          </motion.div>
        </motion.div>

        <motion.p initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-8 text-sm md:text-lg text-[var(--text-muted)] font-medium max-w-2xl leading-relaxed">
          Building high-performance digital ecosystems with
          <span className="text-[var(--text-main)] font-bold mx-1 underline decoration-[#007787]">MERN</span>, and
          <span className="text-[var(--text-main)] font-bold ml-1">React Native</span> technologies. Where logic meets high-performance aesthetics.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }} className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <a href="#projects" className="group relative flex items-center gap-2 px-8 py-4 bg-[#007787] text-white rounded-xl font-bold text-xs uppercase tracking-[0.15em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_-10px_#007787]">
            <span className="relative z-10 flex items-center gap-2">
              Explore Architecture
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#f15a2b] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          {/* VIEW CV BUTTON */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-2 px-8 py-4 bg-[var(--nav-bg)] text-[var(--text-main)] rounded-xl border border-[var(--text-muted)]/30 font-bold text-xs uppercase tracking-[0.15em] hover:bg-foreground/5 transition-all duration-300"
          >
            <Eye size={16} className="text-[#f15a2b] group-hover:scale-110 transition-transform" />
            View CV
          </button>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)] mb-4">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#f15a2b] via-[#f15a2b]/40 to-transparent" />
      </motion.div>

      {/* MODAL COMPONENT */}
      <CVModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cvUrl={googleDriveLink}
      />
    </section>
  );
}