"use client";

import React from "react";
import { User, Code2, Rocket, Coffee, Terminal } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-8 px-4 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-12 space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#007787]/10 rounded-lg">
              <User size={20} className="text-[#007787]" />
            </div>
            <h2 className="text-xl md:text-2xl text-[var(--text-main)] font-black tracking-tighter uppercase italic">
              Identity <span className="text-[#007787]">Report</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="h-[2px] w-12 bg-[#f15a2b]" />
            <p className="text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-[0.3em]">
              The Developer Behind the Code
            </p>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Bio */}
          <div className="relative lg:col-span-8 bg-[var(--nav-bg)] border border-[var(--nav-border)] p-6 sm:p-8 rounded-2xl shadow-sm transition-all overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h3 className="text-lg md:text-xl text-[var(--text-main)] font-black uppercase tracking-tight">
                Software Engineer <span className="text-[#007787]">&</span>{" "}
                Full-Stack Developer
              </h3>

              <div className="space-y-4 text-sm leading-relaxed text-gray-500 font-medium">
                <p>
                  I specialize in building high-performance web and mobile
                  applications using the{" "}
                  <span className="text-[var(--text-main)] font-black">
                    MERN Stack
                  </span>{" "}
                  and{" "}
                  <span className="text-[var(--text-main)] font-black">
                    React Native
                  </span>
                  . My focus is on creating seamless user experiences with
                  modern architectures including Microservices and real-time
                  data processing.
                </p>

                <p>
                  I write clean, maintainable code while building interfaces
                  that are intuitive, responsive, and visually appealing. My
                  goal is to create applications that are both reliable under
                  the hood and enjoyable for users.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {[
                  { icon: <Terminal size={14} />, label: "Clean Code" },
                  { icon: <Rocket size={14} />, label: "Scalability" },
                  { icon: <Coffee size={14} />, label: "Problem Solver" },
                  { icon: <Code2 size={14} />, label: "UI Specialist" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400"
                  >
                    <span className="text-[#f15a2b]">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Background Icon */}
            <div className="absolute -right-10 -bottom-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
              <User className="w-[180px] h-[180px] md:w-[260px] md:h-[260px]" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Availability */}
            <div className="bg-[var(--nav-bg)] border border-[var(--nav-border)] p-6 sm:p-8 rounded-2xl shadow-sm transition-all">
              <h4 className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                Current Status
              </h4>

              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-sm font-bold text-[var(--text-main)]">
                  Available for Projects
                </span>
              </div>
              <p className="text-[10px] text-slate-500 mt-2">
                Open to Full-time roles or Freelance opportunities.
              </p>
            </div>

            {/* Stats */}
            <div className="bg-[#007787] p-8 sm:p-10 rounded-2xl text-white shadow-lg relative overflow-hidden group">
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <p className="text-[12px] md:text-[15px] font-black uppercase opacity-70 tracking-widest">
                    Experience
                  </p>
                  <p className="text-2xl md:text-3xl font-black italic">
                    2+ Years
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[12px] md:text-[15px] font-black uppercase opacity-70 tracking-widest">
                    Projects
                  </p>
                  <p className="text-2xl md:text-3xl font-black italic">25+</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}