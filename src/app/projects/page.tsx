"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  Github,
  ExternalLink,
  Code2,
  ArrowLeft,
  Sun,
  Moon,
  Layers,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "next-themes";
import { projects } from "../../data/projects";

export default function AllProjectsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset to page 1 when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchContent =
        `${project.title} ${project.tags?.join(" ")}`.toLowerCase();
      return searchContent.includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- SMART RESPONSIVE PAGINATION LOGIC ---
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisible = 5; // Show 5 items total including dots

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      // Always show first page
      pageNumbers.push(1);

      if (currentPage > 3) pageNumbers.push("...");

      // Middle pages
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pageNumbers.includes(i)) pageNumbers.push(i);
      }

      if (currentPage < totalPages - 2) pageNumbers.push("...");

      // Always show last page
      if (!pageNumbers.includes(totalPages)) pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* --- FULL WIDTH FIXED NAVBAR --- */}
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
                <span className="text-gray-500 font-medium">
                  / {filteredProjects.length} Projects
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
            <div className="relative max-w-xs w-full group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search
                  size={14}
                  className="text-gray-500 group-focus-within:text-[#007787]"
                />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/5 rounded-xl py-2 pl-10 pr-10 text-[11px] font-medium text-[var(--text-main)] focus:outline-none focus:border-[#007787]/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>
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

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-10">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-[var(--text-main)] tracking-tighter uppercase mb-4">
            Full <span className="text-[#007787]">Archive</span>
          </h1>
          <p className="text-gray-500 max-w-2xl font-medium text-sm">
            Displaying {indexOfFirstProject + 1}-
            {Math.min(indexOfLastProject, filteredProjects.length)} of{" "}
            {filteredProjects.length} projects.
          </p>
        </header>

        {currentProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentProjects.map((project, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col h-full bg-[var(--nav-bg)] border border-[var(--nav-border)] rounded-2xl p-6 transition-all duration-300 hover:border-[#007787]/50 hover:shadow-2xl hover:shadow-[#007787]/5 animate-in fade-in slide-in-from-bottom-2"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-2 bg-foreground/5 rounded-lg border border-foreground/5 group-hover:bg-[#007787]/10 transition-colors">
                      <Code2 size={18} className="text-[#007787]" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-[var(--text-main)] transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-[#007787] bg-[#007787]/10 rounded-lg hover:bg-[#007787] hover:text-white transition-all"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-base font-black uppercase text-[var(--text-main)] mb-2 group-hover:text-[#007787] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-foreground/5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase px-2.5 py-1 bg-foreground/5 text-gray-400 rounded-md border border-foreground/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* --- RESPONSIVE SMART PAGINATION --- */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1 sm:gap-2 pt-10 border-t border-foreground/5">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-foreground/5 border border-foreground/5 disabled:opacity-20 disabled:cursor-not-allowed hover:border-[#007787]/50 transition-all"
                >
                  <ChevronLeft size={16} className="text-gray-400" />
                </button>

                <div className="flex items-center gap-1 sm:gap-2">
                  {getPageNumbers().map((num, idx) =>
                    num === "..." ? (
                      <span
                        key={`dots-${idx}`}
                        className="px-1 text-gray-600 text-xs"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={idx}
                        onClick={() => paginate(num as number)}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-[10px] sm:text-xs font-bold transition-all border ${
                          currentPage === num
                            ? "bg-[#007787] border-[#007787] text-white"
                            : "bg-foreground/5 border-foreground/5 text-gray-400 hover:border-[#007787]/50"
                        }`}
                      >
                        {num}
                      </button>
                    ),
                  )}
                </div>

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-foreground/5 border border-foreground/5 disabled:opacity-20 disabled:cursor-not-allowed hover:border-[#007787]/50 transition-all"
                >
                  <ChevronRight size={16} className="text-gray-400" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">
              No projects match your search.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
