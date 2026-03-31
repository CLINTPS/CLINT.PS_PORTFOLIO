"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Download,
  Layers,
  Code2,
  Terminal,
  Sparkles,
  Mail,
} from "lucide-react";
import CVModal from "../modals/CvModal";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const googleDriveLink =
    "https://drive.google.com/file/d/18FlpFtHlHPO_Ly76qOy3HF0St7m8L_ye/view?usp=drive_link";

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <section className="relative w-full px-4 overflow-hidden transition-colors duration-300">
      {/* Decorative blurred blobs - Added overflow-hidden to parent and responsive sizing */}
      <div className="pointer-events-none absolute -top-16 -left-10 w-[60vw] md:w-[40vw] max-w-[520px] aspect-square bg-gradient-to-br from-[#007787]/30 to-[#f15a2b]/20 rounded-full blur-[60px] md:blur-[90px] mix-blend-screen" />
      <div className="pointer-events-none absolute -bottom-16 right-0 w-[50vw] md:w-[36vw] max-w-[460px] aspect-square bg-gradient-to-br from-[#f15a2b]/25 to-[#007787]/12 rounded-full blur-[50px] md:blur-[80px] mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto py-12 md:py-20 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center"
        >
          {/* Left: Glass panel */}
          <motion.div variants={fadeUp} className="lg:col-span-7 xl:col-span-6">
            <div className="rounded-2xl p-5 md:p-8 backdrop-blur-md bg-white/5 border border-white/6 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-[#007787] to-[#f15a2b] p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center text-3xl font-extrabold text-white">
                      C
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -inset-1 rounded-full border border-white/8"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 font-bold">
                    Hello, I'm
                  </h3>
                  <h1 className="mt-1 text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-[#007787] to-[#9ff7f7] leading-tight">
                    CLINT P S
                  </h1>
                  <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto sm:mx-0 font-medium">
                    Full Stack Developer with 2 years of experience specializing
                    in the MERN stack and React Native, building scalable web
                    and mobile applications with a focus on performance, clean
                    architecture, and seamless user experience.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-3">
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#00a2a2] hover:scale-105 active:scale-95 transition-transform rounded-lg text-xs font-semibold  shadow-md"
                    >
                      Explore Projects <ArrowRight size={16} />
                    </a>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-[#00a2a2]/40 hover:bg-white/5 transition"
                    >
                      <Eye size={16} /> Preview CV
                    </button>

                    <a
                      href={googleDriveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-[#00a2a2]/40 hover:bg-white/5 transition"
                    >
                      <Download size={16} /> Download CV
                    </a>
                  </div>

                  <div className="mt-6 flex items-center justify-center sm:justify-start gap-4 text-[#9fbec0] font-semibold">
                    <a
                      href="#contact"
                      className="flex items-center text-gray-500 gap-2 text-sm  transition"
                    >
                      <Mail size={16} />{" "}
                      <span className="hidden sm:inline">Contact</span>
                    </a>
                    <a
                      href="https://github.com/CLINTPS"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-gray-500 gap-2 text-sm hover:text-white transition"
                    >
                      <BsGithub size={16} />{" "}
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/clint-p-s-a4674017a/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-gray-500 gap-2 text-sm hover:text-white transition"
                    >
                      <BsLinkedin size={16} />{" "}
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* feature chips - Adjusting grid for small screens */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: <Layers size={18} />,
                    title: "MERN Stack",
                    sub: "MongoDB, Express, React, Node",
                  },
                  {
                    icon: <Code2 size={18} />,
                    title: "Frontend Dev",
                    sub: "React, Tailwind, Responsive UI",
                  },
                  {
                    icon: <Terminal size={18} />,
                    title: "Backend APIs",
                    sub: "REST APIs, Auth, Scalable logic",
                  },
                  {
                    icon: <Terminal size={18} />,
                    title: "React Native",
                    sub: "Cross-platform mobile apps",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/6 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="text-[#00a2a2] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>

                    <div>
                      <div className="text-xs text-[#007787] font-bold tracking-wide">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-gray-500 group-hover:text-gray-300 transition">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Feature area */}
          <motion.div variants={fadeUp} className="lg:col-span-5 xl:col-span-6">
            <div className="rounded-2xl p-6 md:p-8 border border-white/6 bg-gradient-to-b from-white/3 to-transparent shadow-2xl min-h-[380px] md:min-h-[420px] flex flex-col justify-between">
              <div className="flex-1 flex flex-col justify-center items-center gap-6">
                <div className="text-center">
                  <h2 className="text-[#007787] text-lg font-bold">
                    Full Stack Architect
                  </h2>
                  <p className="mt-3 text-gray-500 text-sm md:text-base max-w-md font-medium">
                    I design systems that scale — from API gateways to
                    responsive mobile experiences.
                  </p>
                </div>

                <motion.div
                  animate={{ rotate: [-0.5, 0.5, -0.5] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full bg-[#020617]/60 border border-white/4 rounded-xl p-3 md:p-4 shadow-inner"
                >
                  <div className="text-[10px] md:text-xs text-[#9fbec0] font-mono flex items-center gap-2 mb-3">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#f15a2b]" />
                      <span className="w-2 h-2 rounded-full bg-[#f1b26b]" />
                      <span className="w-2 h-2 rounded-full bg-[#a8f0e8]" />
                    </div>
                    <span className="ml-2">app.js</span>
                  </div>

                  <div className="bg-[#071017] rounded-md p-3 font-mono text-[11px] md:text-[12px] leading-relaxed text-[#9fbec0] overflow-x-auto">
                    <div className="whitespace-nowrap">
                      <span className="text-[#f15a2b]">import</span> express{" "}
                      <span className="text-[#f15a2b]">from</span>{" "}
                      <span className="text-[#a8f0e8]">'express'</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <span className="text-[#f15a2b]">const</span> app ={" "}
                      <span className="text-[#00a2a2]">express</span>()
                    </div>
                    <div className="whitespace-nowrap">
                      app.<span className="text-[#00a2a2]">get</span>(
                      <span className="text-[#a8f0e8]">'/'</span>, (req, res)
                      =&gt; res.<span className="text-[#00a2a2]">send</span>(
                      <span className="text-[#a8f0e8]">'hello'</span>))
                    </div>
                    <div className="whitespace-nowrap">
                      app.<span className="text-[#00a2a2]">listen</span>(
                      <span className="text={3000}">3000</span>)
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Tech Badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  {
                    name: "MongoDB",
                    color: "text-[#007787]",
                    icon: <Sparkles size={14} />,
                  },
                  {
                    name: "Express.js",
                    color: "text-[#ffc47a]",
                    icon: <Layers size={14} />,
                  },
                  {
                    name: "React",
                    color: "text-[#ffc47a]",
                    icon: <Terminal size={14} />,
                  },
                  {
                    name: "Node.js",
                    color: "text-[#007787]",
                    icon: <Code2 size={14} />,
                  },
                ].map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/3 border border-white/6 text-xs md:text-sm font-semibold"
                  >
                    <span className={tech.color}>{tech.icon}</span>
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll indicator - Hidden on very small screens to save space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-[#9fbec0]"
      >
        <div className="mb-1 uppercase tracking-wider text-center">Scroll</div>
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#f15a2b] via-[#f15a2b]/40 to-transparent mx-auto" />
      </motion.div>

      <CVModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cvUrl={googleDriveLink}
      />
    </section>
  );
}
