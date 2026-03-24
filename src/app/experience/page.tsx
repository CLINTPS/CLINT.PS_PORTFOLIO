"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sun,
  Moon,
  Layers,
  Terminal,
  Circle,
  Hash,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "next-themes";
import { experiences } from "../../data/experiences";

export default function AllExperiencesPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-[#007787] selection:text-white pb-20">
      {/* --- NAV SECTION (UNTOUCHED) --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--background)]/60 backdrop-blur-xl border-b border-foreground/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/"
              className="group p-2 hover:bg-foreground/5 rounded-lg transition-colors"
            >
              <ArrowLeft
                size={18}
                className="text-gray-400 group-hover:text-[#007787] transition-transform group-hover:-translate-x-1"
              />
            </Link>
            <div className="h-4 w-px bg-foreground/10 hidden md:block" />
            <div className="hidden sm:flex items-center gap-2">
              <Layers size={16} className="text-[#007787]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">
                Archive{" "}
                <span className="text-gray-500 font-medium">/ Experiences</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-foreground/5 border border-foreground/5 hover:border-[#007787]/50 transition-all"
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun size={18} className="text-gray-400" />
                ) : (
                  <Moon size={18} className="text-gray-400" />
                ))}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-26">
        {/* --- HEADER ARRANGEMENT --- */}
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-foreground/5 pb-12">
          <div className="relative">
             <div className="absolute -left-6 top-0 h-full w-[2px] bg-[#f15a2b] hidden lg:block" />
             <p className="text-[#007787] font-mono text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              deploy.logs --verbose
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-[var(--text-main)] tracking-tighter uppercase leading-[0.8]">
              Career<br />
              <span className="text-transparent border-text stroke-current [-webkit-text-stroke:1px_var(--text-main)] opacity-20 italic">Timeline</span>
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-loose">
              Total Entries: {experiences.length} <br />
              Last Updated: March 2026
            </p>
          </div>
        </header>

        {/* --- EXPERIENCE LOG LIST --- */}
        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <div key={i} className="group relative grid grid-cols-1 md:grid-cols-12 gap-10">
              
              {/* Sidebar: Sticky Info */}
              <div className="md:col-span-3">
                <div className="md:sticky md:top-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-[#f15a2b]" />
                    <span className="text-[#f15a2b] font-mono text-[10px] font-black uppercase tracking-tighter">
                      REF_0{i + 1}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-main)] mb-1">
                      {exp.period}
                    </h3>
                    <p className="text-[10px] font-bold text-gray-500 uppercase">Status: Completed</p>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                    {exp.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[9px] font-black text-[#007787] uppercase tracking-tighter">
                        //{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content: Clean Typography */}
              <div className="md:col-span-9">
                <div className="space-y-8 pb-16 border-b border-foreground/5 last:border-0">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[var(--text-main)] group-hover:text-[#007787] transition-all duration-500">
                        {exp.company}
                      </h2>
                      <ArrowUpRight size={20} className="text-foreground/10 group-hover:text-[#007787] transition-colors" />
                    </div>
                    <p className="text-sm md:text-base font-black uppercase tracking-widest text-[#f15a2b] italic">
                      {exp.role}
                    </p>
                  </div>

                  <div className="relative pl-6">
                    <div className="absolute left-0 top-0 h-full w-[1px] bg-foreground/10" />
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#f15a2b] shrink-0" />
                        <span className="text-xs md:text-[13px] font-bold text-[var(--text-main)] leading-snug opacity-80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Module */}
                  <div className="pt-6">
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                      {exp.tech.map((skill) => (
                        <div key={skill} className="flex items-center gap-2 group/skill">
                          <Hash size={10} className="text-[#007787] opacity-40 group-hover/skill:opacity-100 transition-opacity" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover/skill:text-[var(--text-main)] transition-colors">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none -z-10" />
    </main>
  );
}
