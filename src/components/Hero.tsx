// "use client";

// import React, { useState } from "react";
// import { motion, Variants } from "framer-motion";
// import {
//   ArrowRight,
//   Eye,
//   Download,
//   Layers,
//   Code2,
//   Terminal,
//   Sparkles,
//   Mail,
// } from "lucide-react";
// import CVModal from "../modals/CvModal";
// import { BsGithub, BsLinkedin } from "react-icons/bs";

// export default function Hero() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const googleDriveLink =
//     "https://drive.google.com/file/d/18FlpFtHlHPO_Ly76qOy3HF0St7m8L_ye/view?usp=drive_link";

//   const container: Variants = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.08 } },
//   };

//   const fadeUp: Variants = {
//     hidden: { opacity: 0, y: 12 },
//     show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
//   };

//   return (
//     <section className="relative w-full px-4 overflow-hidden transition-colors duration-300">
//       {/* Decorative blurred blobs - Added overflow-hidden to parent and responsive sizing */}
//       <div className="pointer-events-none absolute -top-16 -left-10 w-[60vw] md:w-[40vw] max-w-[520px] aspect-square bg-gradient-to-br from-[#007787]/30 to-[#f15a2b]/20 rounded-full blur-[60px] md:blur-[90px] mix-blend-screen" />
//       <div className="pointer-events-none absolute -bottom-16 right-0 w-[50vw] md:w-[36vw] max-w-[460px] aspect-square bg-gradient-to-br from-[#f15a2b]/25 to-[#007787]/12 rounded-full blur-[50px] md:blur-[80px] mix-blend-screen" />

//       <div className="relative z-10 max-w-7xl mx-auto py-12 md:py-20 lg:py-24">
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center"
//         >
//           {/* Left: Glass panel */}
//           <motion.div variants={fadeUp} className="lg:col-span-7 xl:col-span-6">
//             <div className="rounded-2xl p-5 md:p-8 backdrop-blur-md bg-white/5 border border-white/6 shadow-2xl">
//               <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
//                 <div className="relative shrink-0">
//                   <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-[#007787] to-[#f15a2b] p-[2px]">
//                     <div className="w-full h-full rounded-full overflow-hidden bg-[#020617]">
//                       <img
//                         src="/Profile/CLINT PS DP.png"
//                         alt="CLINT PS"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                   <motion.div
//                     animate={{ scale: [1, 1.12, 1] }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute -inset-1 rounded-full border border-white/8"
//                   />

//                 </div>

//                 <div className="text-center sm:text-left">
//                   <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 font-bold">
//                     Hello, I'm
//                   </h3>
//                   <h1 className="mt-1 text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-[#05a0b4] to-[#4dc8c8] leading-tight">
//                     CLINT P S
//                   </h1>
//                   <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto sm:mx-0 font-medium">
//                     Full Stack Developer with 2 years of experience specializing
//                     in the MERN stack and React Native, building scalable web
//                     and mobile applications with a focus on performance, clean
//                     architecture, and seamless user experience.
//                   </p>

//                   <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-3">
//                     <a
//                       href="#projects"
//                       className="inline-flex items-center gap-2 px-4 py-2 bg-[#00a2a2] hover:scale-105 active:scale-95 transition-transform rounded-lg text-xs font-semibold  shadow-md"
//                     >
//                       Explore Projects <ArrowRight size={16} />
//                     </a>

//                     <button
//                       onClick={() => setIsModalOpen(true)}
//                       className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-[#00a2a2]/40 hover:bg-white/5 transition"
//                     >
//                       <Eye size={16} /> Preview CV
//                     </button>

//                     <a
//                       href={googleDriveLink}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-[#00a2a2]/40 hover:bg-white/5 transition"
//                     >
//                       <Download size={16} /> Download CV
//                     </a>
//                   </div>

//                   <div className="mt-6 flex items-center justify-center sm:justify-start gap-4 text-[#9fbec0] font-semibold">
//                     <a
//                       href="https://www.linkedin.com/in/clint-p-s-a4674017a/"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="flex items-center text-gray-500 gap-2 text-sm hover:text-white transition"
//                     >
//                       <BsLinkedin size={16} />{" "}
//                       <span className="hidden sm:inline">LinkedIn</span>
//                     </a>
//                     <a
//                       href="https://github.com/CLINTPS"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="flex items-center text-gray-500 gap-2 text-sm hover:text-white transition"
//                     >
//                       <BsGithub size={16} />{" "}
//                       <span className="hidden sm:inline">GitHub</span>
//                     </a>
//                     <a
//                       href="#contact"
//                       className="flex items-center text-gray-500 gap-2 text-sm  transition"
//                     >
//                       <Mail size={16} />{" "}
//                       <span className="hidden sm:inline">Contact</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* feature chips - Adjusting grid for small screens */}
//               <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   {
//                     icon: <Layers size={18} />,
//                     title: "MERN Stack",
//                     sub: "MongoDB, Express, React, Node",
//                   },
//                   {
//                     icon: <Code2 size={18} />,
//                     title: "Frontend Dev",
//                     sub: "React, Tailwind, Responsive UI",
//                   },
//                   {
//                     icon: <Terminal size={18} />,
//                     title: "Backend APIs",
//                     sub: "REST APIs, Auth, Scalable logic",
//                   },
//                   {
//                     icon: <Terminal size={18} />,
//                     title: "React Native",
//                     sub: "Cross-platform mobile apps",
//                   },
//                 ].map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/6 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
//                   >
//                     <div className="text-[#00a2a2] group-hover:scale-110 transition-transform">
//                       {item.icon}
//                     </div>

//                     <div>
//                       <div className="text-xs text-[#007787] font-bold tracking-wide">
//                         {item.title}
//                       </div>
//                       <div className="text-[11px] text-gray-500 group-hover:text-gray-300 transition">
//                         {item.sub}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Right: Feature area */}
//           <motion.div variants={fadeUp} className="lg:col-span-5 xl:col-span-6">
//             <div className="rounded-2xl p-6 md:p-8 border border-white/6 bg-gradient-to-b from-white/3 to-transparent shadow-2xl min-h-[380px] md:min-h-[420px] flex flex-col justify-between">
//               <div className="flex-1 flex flex-col justify-center items-center gap-6">
//                 <div className="text-center">
//                   <h2 className="text-[#007787] text-lg font-bold">
//                     Full Stack Architect
//                   </h2>
//                   <p className="mt-3 text-gray-500 text-sm md:text-base max-w-md font-medium">
//                     I design systems that scale — from API gateways to
//                     responsive mobile experiences.
//                   </p>
//                 </div>

//                 <motion.div
//                   animate={{ rotate: [-0.5, 0.5, -0.5] }}
//                   transition={{
//                     duration: 8,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="w-full bg-[#020617]/60 border border-white/4 rounded-xl p-3 md:p-4 shadow-inner"
//                 >
//                   <div className="text-[10px] md:text-xs text-[#9fbec0] font-mono flex items-center gap-2 mb-3">
//                     <div className="flex gap-1.5">
//                       <span className="w-2 h-2 rounded-full bg-[#f15a2b]" />
//                       <span className="w-2 h-2 rounded-full bg-[#f1b26b]" />
//                       <span className="w-2 h-2 rounded-full bg-[#a8f0e8]" />
//                     </div>
//                     <span className="ml-2">app.js</span>
//                   </div>

//                   <div className="bg-[#071017] rounded-md p-3 font-mono text-[11px] md:text-[12px] leading-relaxed text-[#9fbec0] overflow-x-auto">
//                     <div className="whitespace-nowrap">
//                       <span className="text-[#f15a2b]">import</span> express{" "}
//                       <span className="text-[#f15a2b]">from</span>{" "}
//                       <span className="text-[#a8f0e8]">'express'</span>
//                     </div>
//                     <div className="whitespace-nowrap">
//                       <span className="text-[#f15a2b]">const</span> app ={" "}
//                       <span className="text-[#00a2a2]">express</span>()
//                     </div>
//                     <div className="whitespace-nowrap">
//                       app.<span className="text-[#00a2a2]">get</span>(
//                       <span className="text-[#a8f0e8]">'/'</span>, (req, res)
//                       =&gt; res.<span className="text-[#00a2a2]">send</span>(
//                       <span className="text-[#a8f0e8]">'hello'</span>))
//                     </div>
//                     <div className="whitespace-nowrap">
//                       app.<span className="text-[#00a2a2]">listen</span>(
//                       <span className="text={3000}">3000</span>)
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Tech Badges */}
//               <div className="mt-8 flex flex-wrap justify-center gap-3">
//                 {[
//                   {
//                     name: "MongoDB",
//                     color: "text-[#007787]",
//                     icon: <Sparkles size={14} />,
//                   },
//                   {
//                     name: "Express.js",
//                     color: "text-[#ffc47a]",
//                     icon: <Layers size={14} />,
//                   },
//                   {
//                     name: "React",
//                     color: "text-[#ffc47a]",
//                     icon: <Terminal size={14} />,
//                   },
//                   {
//                     name: "Node.js",
//                     color: "text-[#007787]",
//                     icon: <Code2 size={14} />,
//                   },
//                 ].map((tech) => (
//                   <motion.div
//                     key={tech.name}
//                     whileHover={{ y: -4 }}
//                     className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/3 border border-white/6 text-xs md:text-sm font-semibold"
//                   >
//                     <span className={tech.color}>{tech.icon}</span>
//                     {tech.name}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* scroll indicator - Hidden on very small screens to save space */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2 }}
//         className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-[#9fbec0]"
//       >
//         <div className="mb-1 uppercase tracking-wider text-center">Scroll</div>
//         <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#f15a2b] via-[#f15a2b]/40 to-transparent mx-auto" />
//       </motion.div>

//       <CVModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         cvUrl={googleDriveLink}
//       />
//     </section>
//   );
// }



"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Database,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";
import CVModal from "../modals/CvModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const googleDriveLink =
    "https://drive.google.com/file/d/18FlpFtHlHPO_Ly76qOy3HF0St7m8L_ye/view?usp=drive_link";

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const techStack = [
    {
      name: "MongoDB",
      icon: <Database size={17} />,
    },
    {
      name: "Express.js",
      icon: <Smartphone size={17} />,
    },
    {
      name: "React.js",
      icon: <Code2 size={17} />,
    },
    {
      name: "Node.js",
      icon: <Server size={17} />,
    },
  ];

  return (
    <>
      <section
        id="home"
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
          bg-white
          text-slate-900
          transition-colors
          duration-300
          dark:bg-[#020617]
          dark:text-white
        "
      >
        {/* =========================================================
            BACKGROUND
        ========================================================= */}

        <div className="pointer-events-none absolute inset-0">
          {/* Top Left Glow */}
          <div
            className="
              absolute
              -left-32
              -top-32
              h-[400px]
              w-[400px]
              rounded-full
              bg-[#007787]/10
              blur-[120px]
              dark:bg-[#007787]/20
            "
          />

          {/* Top Right Glow */}
          <div
            className="
              absolute
              -right-32
              top-1/4
              h-[350px]
              w-[350px]
              rounded-full
              bg-[#f15a2b]/5
              blur-[120px]
              dark:bg-[#f15a2b]/10
            "
          />

          {/* Bottom Glow */}
          <div
            className="
              absolute
              bottom-0
              left-1/3
              h-[250px]
              w-[250px]
              rounded-full
              bg-[#007787]/5
              blur-[100px]
              dark:bg-[#007787]/10
            "
          />

          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              dark:opacity-[0.025]
            "
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        {/* =========================================================
            MAIN
        ========================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100vh-64px)]
            max-w-7xl
            items-center
            px-5
            py-10
            sm:px-8
            lg:px-10
            lg:py-8
          "
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="
              grid
              w-full
              grid-cols-1
              items-center
              gap-10
              lg:grid-cols-12
              lg:gap-12
            "
          >
            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}

            <motion.div
              variants={fadeUp}
              className="lg:col-span-7"
            >
              {/* Available Badge */}

              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#00a2a2]/20
                  bg-[#00a2a2]/5
                  px-3
                  py-1.5
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-[#00a2a2]
                      opacity-70
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-[#00a2a2]
                    "
                  />
                </span>

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-wider
                    text-slate-500
                    dark:text-gray-400
                  "
                >
                  OPEN TO NEW OPPORTUNITIES
                </span>
              </div>

              {/* Greeting */}

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#007787]
                "
              >
                Hello, I'm
              </p>

              {/* NAME */}

              <h1
                className="
                  mt-2
                  whitespace-nowrap
                  text-5xl
                  font-black
                  leading-none
                  tracking-tight
                  text-slate-900
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[72px]
                  dark:text-white
                "
              >
                CLINT{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#00a2a2]
                    via-[#00a2a2]
                    to-[#00a2a2]
                    bg-clip-text
                    text-transparent
                  "
                >
                  PS
                </span>
              </h1>

              {/* ROLE */}

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <span
                  className="
                    text-lg
                    font-semibold
                    text-slate-800
                    sm:text-xl
                    dark:text-gray-200
                  "
                >
                  Full Stack Developer
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#f15a2b]" />

                <span
                  className="
                    text-lg
                    font-medium
                    text-slate-500
                    sm:text-xl
                    dark:text-gray-500
                  "
                >
                  MERN Stack Developer
                </span>
              </div>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-slate-600
                  sm:text-base
                  sm:leading-7
                  dark:text-gray-400
                "
              >
                I build scalable web and mobile applications using modern
                technologies, clean architecture, and performance-focused
                development.
              </p>

              {/* LOCATION */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-500
                  dark:text-gray-500
                "
              >
                <MapPin
                  size={14}
                  className="text-[#007787]"
                />

                Kozhikode, Kerala, India
              </div>

              {/* =====================================================
                  BUTTONS
              ===================================================== */}

              <div className="mt-6 flex flex-wrap gap-2.5">
                {/* View Projects */}

                <a
                  href="#projects"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-[#00a2a2]
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    text-[#001b1c]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#18baba]
                  "
                >
                  View Projects

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>

                {/* Preview CV */}

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-slate-300
                    bg-slate-50
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-slate-700
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#00a2a2]/40
                    hover:bg-[#00a2a2]/5

                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-gray-300
                    dark:hover:bg-white/[0.06]
                  "
                >
                  <Eye size={15} />

                  Preview CV
                </button>

                {/* Download CV */}

                <a
                  href={googleDriveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-slate-300
                    bg-slate-50
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-slate-700
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#f15a2b]/40
                    hover:bg-[#f15a2b]/5

                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-gray-300
                    dark:hover:bg-white/[0.06]
                  "
                >
                  <Download size={15} />

                  Download CV
                </a>
              </div>

              {/* =====================================================
                  SOCIALS
              ===================================================== */}

              <div className="mt-5 flex items-center gap-5">
                {/* GitHub */}

                <a
                  href="https://github.com/CLINTPS"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-slate-500
                    transition
                    hover:text-slate-900
                    dark:text-gray-500
                    dark:hover:text-white
                  "
                >
                  <Github size={17} />

                  GitHub
                </a>

                <span
                  className="
                    h-4
                    w-px
                    bg-slate-200
                    dark:bg-white/10
                  "
                />

                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/clint-p-s-a4674017a/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-slate-500
                    transition
                    hover:text-[#0077b5]
                    dark:text-gray-500
                    dark:hover:text-white
                  "
                >
                  <Linkedin size={17} />

                  LinkedIn
                </a>

                <span
                  className="
                    h-4
                    w-px
                    bg-slate-200
                    dark:bg-white/10
                  "
                />

                {/* Contact */}

                <a
                  href="#contact"
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-slate-500
                    transition
                    hover:text-[#007787]
                    dark:text-gray-500
                    dark:hover:text-white
                  "
                >
                  <Mail size={17} />

                  Contact
                </a>
              </div>

              {/* =====================================================
                  TECH STACK
              ===================================================== */}

              <div
                className="
                  mt-7
                  grid
                  max-w-xl
                  grid-cols-2
                  gap-2.5
                  sm:grid-cols-4
                "
              >
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      px-3
                      py-2.5
                      transition

                      hover:border-[#00a2a2]/30
                      hover:bg-[#00a2a2]/5

                      dark:border-white/[0.07]
                      dark:bg-white/[0.025]
                      dark:hover:bg-white/[0.05]
                    "
                  >
                    <span className="text-[#007787]">
                      {tech.icon}
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        text-slate-600
                        sm:text-xs
                        dark:text-gray-400
                      "
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =====================================================
                RIGHT PROFILE
            ===================================================== */}

            <motion.div
              variants={fadeUp}
              className="
                relative
                flex
                items-center
                justify-center
                lg:col-span-5
              "
            >
              {/* Rotating Circle */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  h-[300px]
                  w-[300px]
                  rounded-full
                  border
                  border-dashed
                  border-[#007787]/20
                  sm:h-[350px]
                  sm:w-[350px]
                "
              />

              {/* Profile */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    inset-5
                    rounded-full
                    bg-[#007787]/10
                    blur-[60px]
                    dark:bg-[#007787]/20
                  "
                />

                {/* Image Container */}

                <div
                  className="
                    relative
                    h-[270px]
                    w-[270px]
                    overflow-hidden
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-2xl
                    sm:h-[320px]
                    sm:w-[320px]

                    dark:border-white/10
                    dark:bg-[#071017]
                  "
                >
                  <div
                    className="
                      h-full
                      w-full
                      overflow-hidden
                      rounded-full
                      bg-slate-100
                      dark:bg-[#020617]
                    "
                  >
                    <img
                      src="/Profile/CLINT PS DP.png"
                      alt="CLINT PS"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Image Overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-2
                      rounded-full
                      bg-gradient-to-t
                      from-slate-900/20
                      to-transparent
                      dark:from-[#020617]/40
                    "
                  />
                </div>

                {/* =================================================
                    FLOATING CARD 1
                ================================================= */}

                <motion.div
                  animate={{
                    y: [0, 7, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -left-8
                    top-10
                    hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-white/95
                    px-3
                    py-2.5
                    shadow-xl
                    backdrop-blur-xl
                    sm:block

                    dark:border-white/10
                    dark:bg-[#071017]/90
                  "
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#00a2a2]/10
                        text-[#00a2a2]
                      "
                    >
                      <Code2 size={16} />
                    </div>

                    <div>
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-wider
                          text-slate-400
                          dark:text-gray-600
                        "
                      >
                        Stack
                      </p>

                      <p
                        className="
                          text-xs
                          font-bold
                          text-slate-800
                          dark:text-gray-300
                        "
                      >
                        MERN
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    FLOATING CARD 2
                ================================================= */}

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -right-8
                    bottom-12
                    hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-white/95
                    px-3
                    py-2.5
                    shadow-xl
                    backdrop-blur-xl
                    sm:block

                    dark:border-white/10
                    dark:bg-[#071017]/90
                  "
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#f15a2b]/10
                        text-[#f15a2b]
                      "
                    >
                      <Sparkles size={16} />
                    </div>

                    <div>
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-wider
                          text-slate-400
                          dark:text-gray-600
                        "
                      >
                        Experience
                      </p>

                      <p
                        className="
                          text-xs
                          font-bold
                          text-slate-800
                          dark:text-gray-300
                        "
                      >
                        2+ Years
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    AVAILABLE BADGE
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-[-15px]
                    left-1/2
                    -translate-x-1/2
                    rounded-full
                    border
                    border-[#00a2a2]/20
                    bg-white/95
                    px-4
                    py-2
                    shadow-xl
                    backdrop-blur-xl

                    dark:bg-[#071017]/90
                  "
                >
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <span className="h-2 w-2 rounded-full bg-[#00a2a2]" />

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        text-slate-500
                        dark:text-gray-400
                      "
                    >
                      Building with modern technologies
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================================
            SCROLL
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="
            absolute
            bottom-3
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            md:flex
          "
        >
          <span
            className="
              mb-1
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-slate-400
              dark:text-gray-600
            "
          >
            Scroll
          </span>

          <motion.div
            animate={{
              height: [15, 25, 15],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              w-px
              bg-gradient-to-b
              from-[#00a2a2]
              to-transparent
            "
          />
        </motion.div>
      </section>

      {/* =========================================================
          CV MODAL
      ========================================================= */}

      <CVModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cvUrl={googleDriveLink}
      />
    </>
  );
}