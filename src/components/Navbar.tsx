// "use client";

// import React, { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { Sun, Moon, Phone } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   const phoneNumber = "1234567890";

//   useEffect(() => {
//     setMounted(true);

//     const handleUpdate = (e: any) => {
//       const currentScrollY = window.scrollY;

//       // 1. Show if mouse is near the top (e.g., within 50px of top)
//       if (e.clientY !== undefined && e.clientY < 50) {
//         setIsVisible(true);
//       }
//       // 2. Hide if scrolling down, Show if scrolling up
//       else if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setIsVisible(false);
//         setIsOpen(false); // Close mobile menu if hiding
//       } else {
//         setIsVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleUpdate);
//     window.addEventListener("mousemove", handleUpdate);

//     return () => {
//       window.removeEventListener("scroll", handleUpdate);
//       window.removeEventListener("mousemove", handleUpdate);
//     };
//   }, [lastScrollY]);

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//   ];

//   if (!mounted) return null;

//   return (
//     <nav
//       className={`fixed top-4 w-full z-50 px-4 transition-all duration-500 ease-in-out ${
//         isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-between bg-[var(--nav-bg)] backdrop-blur-md border border-[var(--nav-border)] p-2 rounded-2xl shadow-2xl">
//           {/* Section 1: Logo */}
//           <a
//             href="#"
//             className="flex items-center gap-3 px-4 py-2 bg-foreground/5 rounded-xl border border-foreground/5 hover:bg-foreground/10 transition-all"
//           >
//             <div className="w-6 h-6 bg-[#007787] rounded-md rotate-45" />
//             <span className="text-[var(--text-main)] font-bold tracking-tighter uppercase text-sm">
//               CLINT P S
//             </span>
//           </a>

//           {/* Section 2: Desktop Links */}
//           <div className="hidden md:flex items-center gap-1 bg-foreground/5 p-1 rounded-xl">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#007787] hover:bg-foreground/5 rounded-lg transition-all"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Section 3: Theme Toggle, Call & CTA */}
//           <div className="flex items-center gap-2">
//             <a
//               href={`tel:${phoneNumber}`}
//               className="hidden md:flex p-2.5 bg-[#007787]/10 rounded-xl border border-[#007787]/20 text-[#007787] hover:bg-[#007787] hover:text-white transition-all group"
//               title="Call Me"
//             >
//               <Phone size={18} className="group-hover:rotate-12 transition-transform" />
//             </a>

//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="p-2.5 bg-foreground/5 rounded-xl border border-foreground/10 text-[var(--text-main)] hover:bg-foreground/10 transition-all"
//             >
//               {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             <a
//               href="#contact"
//               className="hidden sm:block px-6 p-3 bg-[#007787] text-white text-xs font-black uppercase rounded-xl hover:bg-[#008fa3] transition-all shadow-[0_0_20px_rgba(0,119,135,0.3)]"
//             >
//               Contact
//             </a>

//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden p-3 bg-foreground/5 rounded-xl text-[var(--text-main)] border border-foreground/10"
//             >
//               <div className="w-5 h-4 flex flex-col justify-between">
//                 <span className={`h-0.5 bg-[#007787] transition-all ${isOpen ? "rotate-45 translate-y-2 w-full" : "w-2/3"}`} />
//                 <span className={`h-0.5 bg-current transition-all ${isOpen ? "opacity-0" : "w-full"}`} />
//                 <span className={`h-0.5 bg-[#007787] transition-all ${isOpen ? "-rotate-45 -translate-y-1.5 w-full" : "w-1/3"}`} />
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`mt-2 overflow-hidden transition-all duration-300 md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
//           <div className="grid grid-cols-2 gap-2 p-2 bg-[var(--nav-bg)] backdrop-blur-xl border border-[var(--nav-border)] rounded-2xl">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="flex items-center justify-center p-4 bg-foreground/5 rounded-xl text-[var(--text-main)] font-bold text-sm hover:bg-[#007787]/20 border border-foreground/5"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 p-4 bg-foreground/5 border border-[#007787]/30 rounded-xl text-[#007787] font-bold text-sm">
//               <Phone size={16} /> CALL
//             </a>
//             <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex items-center justify-center p-4 bg-foreground/5 rounded-xl text-[var(--text-main)] font-bold text-sm">
//               {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
//             </button>
//             <a href="#contact" onClick={() => setIsOpen(false)} className="col-span-2 flex items-center justify-center p-4 bg-[#007787] rounded-xl text-white font-black text-sm">
//               LET'S TALK
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Phone,
  X,
  Menu,
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  ChevronRight,
  BriefcaseBusiness,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ref to detect clicks outside
  const navRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "+919496911848";

  useEffect(() => {
    setMounted(true);

    // 1. Hide on Scroll Logic
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    // 2. Show on Mouse at Top
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 40) setIsVisible(true);
    };

    // 3. Hide on Outside Click Logic
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: BriefcaseBusiness },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  if (!mounted) return null;

  return (
    <div ref={navRef}>
      <AnimatePresence>
        {!isVisible && (
          <motion.button
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            onClick={() => setIsVisible(true)}
            className="fixed top-0 left-1/2 -translate-x-1/2 z-[60] bg-[#007787] text-white px-4 py-1 rounded-b-xl text-[10px] font-bold uppercase tracking-widest shadow-lg"
          >
            Show Menu
          </motion.button>
        )}
      </AnimatePresence>

      {/* Desktop: Compact Vertical Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -120, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block"
      >
        <div className="relative">
          <div className="bg-[var(--nav-bg)]/80 backdrop-blur-xl border border-[var(--nav-border)] rounded-2xl p-2 shadow-2xl flex flex-col items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007787] to-[#f15a2b] flex items-center justify-center text-white font-black text-lg shadow-md hover:scale-110 transition-transform"
            >
              M
            </a>

            <div className="flex flex-col items-center gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="group relative flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--nav-bg)] border border-[var(--nav-border)] text-[var(--text-muted)] hover:text-[#007787] hover:border-[#007787] transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.name}
                >
                  <link.icon size={16} />
                  <span className="absolute left-full ml-1 px-1.5 py-0.5 bg-[#007787] text-white text-[9px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-lg bg-[var(--nav-bg)] border border-[var(--nav-border)] text-[var(--text-main)] hover:text-[#f15a2b] hover:border-[#f15a2b] transition-all flex items-center justify-center"
              whileHover={{ rotate: 15 }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <a
              href={`tel:${phoneNumber}`}
              className="w-9 h-9 rounded-lg bg-[#007787]/10 border border-[#007787]/20 text-[#007787] hover:bg-[#007787] hover:text-white transition-all flex items-center justify-center"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>
      </motion.aside>

      {/* Mobile: Compact Bottom Dock */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 120 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 block md:hidden w-[calc(100%-2rem)] max-w-sm"
      >
        <div className="bg-[var(--nav-bg)]/80 backdrop-blur-xl border border-[var(--nav-border)] rounded-xl p-1.5 shadow-2xl">
          <div className="flex items-center justify-around">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex flex-col items-center gap-0.5 p-1.5 text-[var(--text-muted)] hover:text-[#007787] transition-colors"
              >
                <link.icon size={18} />
                <span className="text-[7px] font-bold uppercase tracking-wider">
                  {link.name}
                </span>
              </a>
            ))}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent immediate hide
                setIsOpen(!isOpen);
              }}
              className="flex flex-col items-center gap-0.5 p-1.5 text-[var(--text-muted)] hover:text-[#f15a2b]"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="text-[7px] font-bold uppercase tracking-wider">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile expanded menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 block md:hidden w-[calc(100%-2rem)] max-w-sm"
          >
            <div className="bg-[var(--nav-bg)]/95 backdrop-blur-xl border border-[var(--nav-border)] rounded-xl p-3 shadow-2xl">
              <div className="grid grid-cols-2 gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-lg bg-[var(--nav-bg)] border border-[var(--nav-border)] hover:border-[#007787] hover:text-[#007787] transition-all text-sm"
                  >
                    <link.icon size={16} />
                    <span className="text-xs font-bold">{link.name}</span>
                  </a>
                ))}
              </div>
              <div className="flex gap-1.5 mt-3">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex-1 flex items-center justify-center gap-1 p-2 rounded-lg border border-[var(--nav-border)] hover:border-[#f15a2b] hover:text-[#f15a2b] transition-all text-xs"
                >
                  {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                  <span className="text-xs font-bold">Theme</span>
                </button>
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 flex items-center justify-center gap-1 p-2 rounded-lg bg-[#007787]/10 border border-[#007787]/20 text-[#007787] hover:bg-[#007787] hover:text-white transition-all text-xs"
                >
                  <Phone size={14} />
                  <span className="text-xs font-bold">Call</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lastScrollY > 400 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-20 md:bottom-5 right-4 md:right-5 z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-[var(--nav-bg)] border border-[var(--nav-border)] text-[#007787] shadow-xl backdrop-blur-md hover:border-[#f15a2b] hover:text-[#f15a2b] transition-colors"
          >
            <ChevronRight className="-rotate-90" size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}