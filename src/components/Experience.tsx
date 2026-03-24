"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Calendar,
  Building2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { experiences } from "../data/experiences";

export default function Experience() {
  const featuredExperiences = experiences.slice(0, 2);

  return (
    <section
      id="experience"
      className="w-full py-6 px-4 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Responsive Header: Stacks on mobile, splits on desktop */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 md:mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#007787]/10 rounded-lg shrink-0">
                <Briefcase size={20} className="text-[#007787]" />
              </div>
              <h2 className="text-xl md:text-2xl text-[var(--text-main)] font-black tracking-tighter uppercase italic leading-none">
                Professional <span className="text-[#007787]">Chronology</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#f15a2b] shrink-0" />
              <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
                Selected Work Milestones
              </p>
            </div>
          </div>

          <Link
            href="/experience"
            className="group flex items-center self-center md:self-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 hover:text-[#007787] transition-all whitespace-nowrap"
          >
            View History
            <ArrowRight
              size={14}
              className="text-[#f15a2b] group-hover:translate-x-1.5 transition-transform"
            />
          </Link>
        </div>

        {/* Timeline - Adjusted padding for mobile */}
        <div className="relative border-l border-[var(--nav-border)] ml-2 sm:ml-4 md:ml-0 pl-6 md:pl-8 space-y-10">
          {featuredExperiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot - Positioned carefully */}
              <div className="absolute -left-[33px] md:-left-[41px] top-2 w-4 h-4 rounded-full bg-[#007787] border-4 border-[var(--nav-bg)] group-hover:scale-125 transition-transform"></div>

              <div className="bg-[var(--nav-bg)] border border-[var(--nav-border)] rounded-2xl p-5 md:p-8 transition-all duration-300 hover:border-[#007787]/40 hover:shadow-2xl hover:shadow-[#007787]/5">
                {/* Job Title & Period - Better mobile flow */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[var(--text-main)]">
                      <Building2
                        size={18}
                        className="text-[#007787] shrink-0"
                      />
                      <h3 className="text-base md:text-lg font-black uppercase tracking-tight">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm font-bold text-gray-500 italic">
                      {exp.role}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#007787]/10 text-[#007787] border border-[#007787]/20 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-wider w-fit shrink-0">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium mb-6">
                  {exp.description}
                </p>

                {/* Highlights Grid - Stays 1 col on small, 2 col on medium */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ChevronRight
                        size={14}
                        className="mt-[2px] text-[#f15a2b] shrink-0"
                      />
                      <span className="text-[11px] md:text-xs font-semibold text-[var(--text-main)]/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack - Flex wrap handles responsiveness automatically */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-foreground/5">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest bg-foreground/5 rounded-md border border-foreground/10 text-slate-500 group-hover:border-[#007787]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}