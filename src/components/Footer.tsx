"use client"

import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si'; // LeetCode is often in Simple Icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: <BsLinkedin size={16} />, href: 'https://www.linkedin.com/in/clint-p-s-a4674017a/' },
    { name: 'GitHub', icon: <BsGithub size={16} />, href: 'https://github.com/CLINTPS' },
    { name: 'LeetCode', icon: <SiLeetcode size={16} />, href: 'https://leetcode.com/u/clintps1010/' },
    { name: 'WhatsApp', icon: <BsWhatsapp size={16} />, href: 'https://wa.me/9496911848' },
    { name: 'Twitter', icon: <BsTwitter size={16} />, href: 'https://twitter.com' },
    { name: 'Instagram', icon: <BsInstagram size={16} />, href: 'https://www.instagram.com/clint._.ps/' },
    { name: 'Facebook', icon: <BsFacebook size={16} />, href: 'https://www.facebook.com/clint.ps.1' },
  ];

  return (
    <footer className="w-full px-4 pb-10 mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="bg-[var(--nav-bg)] backdrop-blur-md border border-[var(--nav-border)] rounded-2xl p-8 md:p-12 shadow-2xl transition-colors duration-300">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            {/* Branding & Status */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-foreground/5 rounded-xl border border-foreground/5">
                <div className="w-2 h-2 bg-[#007787] rounded-full animate-pulse" />
                <span className="text-[var(--text-main)] font-bold tracking-tighter uppercase text-xs">
                  Available for new projects
                </span>
              </div>
              <h2 className="text-2xl font-black text-[var(--text-main)] tracking-tighter uppercase text-center md:text-left">
                Let's build something<br />
                <span className="text-[#007787]">extraordinary.</span>
              </h2>
            </div>

            {/* Social Links - Fixed Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-[130px] md:w-[110px] py-3 bg-foreground/5 border border-foreground/10 rounded-xl text-xs font-bold text-gray-500 hover:text-[#007787] hover:bg-foreground/10 transition-all"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="h-[1px] w-full bg-foreground/10 my-10" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-medium text-gray-500 tracking-widest uppercase text-center">
              © {currentYear} Clint_ps.Portfolio — All Rights Reserved
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-[#007787] transition-colors">Privacy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-[#007787] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
