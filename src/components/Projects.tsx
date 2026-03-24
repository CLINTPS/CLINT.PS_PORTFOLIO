"use client";

import React from "react";
import { ExternalLink, Code2, Layers, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="w-full py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Responsive Fix */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 md:mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#007787]/10 rounded-lg">
                <Layers size={20} className="text-[#007787]" />
              </div>
              <h2 className="text-xl md:text-2xl text-[var(--text-main)] font-black tracking-tighter uppercase italic leading-none">
                Featured <span className="text-[#007787]">Projects</span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#f15a2b]" />
              <p className="text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-[0.3em]">
                The Developer Behind the Project
              </p>
            </div>
          </div>

          {/* Button: Align right on desktop, left on mobile */}
          <Link
            href="/projects"
            className="group flex items-center self-center md:self-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 hover:text-[#007787] transition-all whitespace-nowrap"
          >
            View Full Projects
            <ArrowRight
              size={14}
              className="text-[#f15a2b] group-hover:translate-x-1.5 transition-transform"
            />
          </Link>
        </div>

        {/* Grid: Card UI remains exactly the same */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              className="group relative flex flex-col h-full bg-[var(--nav-bg)] border border-[var(--nav-border)] rounded-2xl p-6 transition-all duration-300 hover:border-[#007787]/50 hover:shadow-xl hover:-translate-y-1.5"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-foreground/5 rounded-xl border border-foreground/5 group-hover:bg-[#007787]/10 transition-colors">
                  <Code2 size={18} className="text-[#007787]" />
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-foreground/5 rounded-lg text-gray-400 hover:text-[var(--text-main)] hover:bg-foreground/10 transition-all"
                  >
                    <BsGithub size={16} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#007787]/10 rounded-lg text-[#007787] hover:bg-[#007787] hover:text-white transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="flex-grow space-y-2">
                <h3 className="text-base font-black text-[var(--text-main)] tracking-tight uppercase group-hover:text-[#007787] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 pt-5 border-t border-foreground/5 flex flex-wrap gap-1.5">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-foreground/5 text-gray-400 rounded-md border border-foreground/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#007787]/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}