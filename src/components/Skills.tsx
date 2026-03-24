"use client";

import React from "react";
import {
  Globe,
  Binary,
  Zap,
  Workflow,
  Layout,
  Code,
  Layers,
  Cpu,
  Settings,
  Smartphone,
  Sparkles,
  MousePointer2,
} from "lucide-react";

export default function Skills() {
  const card =
    "bg-[var(--nav-bg)] border border-[var(--nav-border)] p-6 rounded-2xl shadow-sm transition-all hover:border-[#007787]/50 group";

  const tag =
    "text-[9px] font-bold px-2 py-1 rounded border border-[var(--nav-border)] bg-black/5 text-gray-500 dark:text-gray-400 uppercase tracking-tighter";

  const highlightTag =
    "text-[9px] font-bold px-2 py-1 rounded border border-[#007787]/20 bg-[#007787]/5 text-[#007787] uppercase";

  const aiTag =
    "text-[9px] font-bold px-2 py-1 rounded border border-blue-500/20 bg-blue-500/5 text-blue-500 uppercase";

  return (
    <section
      id="skills"
      className="w-full py-12 px-4 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#007787]/10 rounded-lg">
              <Code size={20} className="text-[#007787]" />
            </div>
            <h2 className="text-xl md:text-2xl text-[var(--text-main)] font-black tracking-tighter uppercase italic">
              Technical <span className="text-[#007787]">Arsenal</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-[#f15a2b]" />
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
              Full Stack Engineering & AI Integration
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* 1. LANGUAGES & CORE */}
          <div className={`${card} md:col-span-8 relative overflow-hidden`}>
            <div className="flex items-center gap-2 mb-4 text-[#f15a2b]">
              <Binary size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Programming & Logic
              </span>
            </div>
            <h3 className="text-2xl font-black text-[var(--text-main)] mb-4 uppercase">
              Core <span className="text-[#007787]">Languages</span>
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "JavaScript",
                "TypeScript",
                "SQL",
                "Data Structures",
                "Embedded JavaScript (EJS)",
              ].map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 bg-[#007787] text-white text-xs font-bold rounded-lg shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="absolute right-[5px] bottom-[4px] opacity-[0.05] group-hover:rotate-20 transition-transform duration-1500">
              <Cpu size={180} />
            </div>
          </div>

          {/* 2. AI & INTELLIGENT TOOLING (New Unique Card) */}
          <div
            className={`${card} md:col-span-4 bg-gradient-to-br from-transparent to-blue-500/5 border-blue-500/20`}
          >
            <div className="flex items-center gap-2 mb-4 text-blue-500">
              <Sparkles size={14} />
              <span className="text-[10px] font-black uppercase">
                AI & LLM Stack
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["ChatGPT", "Gemini", "Claude AI", "DeepSeek", "Grok"].map(
                (s) => (
                  <span key={s} className={aiTag}>
                    {s}
                  </span>
                ),
              )}
              {["Cursor", "Copilot", "Lovable AI", "Altigravity"].map((s) => (
                <span
                  key={s}
                  className="text-[9px] font-bold px-2 py-1 rounded border border-slate-500/20 bg-slate-500/5 text-slate-400 uppercase tracking-tighter"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* 3. FRONTEND & MOBILE DEVELOPMENT */}
          <div className={`${card} md:col-span-6`}>
            <div className="flex items-center gap-2 mb-4 text-[#007787]">
              <Layout size={16} />
              <h3 className="font-black text-xs uppercase tracking-widest">
                Frontend & Mobile
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Next.js",
                "React.js",
                "React Native",
                "Expo Go",
                "Redux",
                "Tailwind CSS",
                "Bootstrap",
                "HTML5",
                "CSS3",
                "Web-Socket",
                "Fetch",
                "Ajax",
              ].map((s) => (
                <span key={s} className={highlightTag}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* 4. BACKEND & ARCHITECTURE */}
          <div className={`${card} md:col-span-6`}>
            <div className="flex items-center gap-2 mb-4 text-[#f15a2b]">
              <Layers size={16} />
              <h3 className="font-black text-xs uppercase tracking-widest">
                Backend & Architecture
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Node.js",
                "Express.js",
                "Microservices",
                "Clean Architecture",
                "Monolithic",
                "MVC",
                "Schema Design",
              ].map((s) => (
                <span
                  key={s}
                  className="text-[9px] font-bold px-2 py-1 rounded border border-[#f15a2b]/20 bg-[#f15a2b]/5 text-[#f15a2b] uppercase"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* 5. DATABASE & INTEGRATIONS */}
          <div
            className={`${card} md:col-span-7 flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap size={14} className="text-yellow-500" />
                <span className="text-[10px] font-black text-gray-500 uppercase">
                  Integrations & Data
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-[9px] font-black text-[var(--text-main)] mb-2 uppercase opacity-50">
                    Databases
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["MongoDB", "PostgreSQL", "Firebase", "SQL"].map((d) => (
                      <span key={d} className={tag}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[9px] font-black text-[var(--text-main)] mb-2 uppercase opacity-50">
                    Services
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Razorpay",
                      "Stripe",
                      "OAuth",
                      "Socket.io",
                      "Kafka",
                      "Cloudinary",
                      "Nodemailer",
                    ].map((i) => (
                      <span key={i} className={tag}>
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. DEV WORKFLOW & TOOLS */}
          <div className={`${card} md:col-span-5`}>
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <Settings size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Dev Workflow
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Git",
                "GitHub",
                "Postman",
                "Prettier",
                "VSCode",
                "Figma",
                "Canva",
                "Eclipse",
              ].map((s) => (
                <span key={s} className={tag}>
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <MousePointer2 size={12} className="text-[#007787]" />
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                Optimized with Prettier & Cursor
              </span>
            </div>
          </div>

          {/* 7. DEPLOYMENT (Full Width/Large Span) */}
          <div className="md:col-span-12 bg-[#1a1a1a] p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between text-white border border-white/10 shadow-xl group overflow-hidden relative">
            <div className="z-10">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <Workflow
                  size={24}
                  className="text-[#007787] group-hover:rotate-90 transition-transform duration-500"
                />
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter">
                    Infrastructure & Deployment
                  </h3>
                  <div className="flex gap-1 items-center mt-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[8px] font-black uppercase text-green-500 tracking-widest">
                      Global Production Network
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 z-10 md:max-w-[60%] justify-start md:justify-end">
              {[
                "AWS",
                "Azure",
                "Docker",
                "Kubernetes",
                "Nginx",
                "CI/CD",
                "Vercel",
                "Render",
              ].map((d) => (
                <span
                  key={d}
                  className="text-[9px] font-bold px-3 py-1.5 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors uppercase"
                >
                  {d}
                </span>
              ))}
            </div>

            <Globe
              className="absolute right-[-20px] bottom-[-40px] opacity-10"
              size={200}
            />
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 border-t border-[var(--nav-border)] pt-8">
          <div className="flex items-center gap-3 text-gray-500">
            <Smartphone size={16} className="text-[#007787]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              React Native & Expo Go Specialty
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <Sparkles size={16} className="text-blue-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              AI-Accelerated Development Workflow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}