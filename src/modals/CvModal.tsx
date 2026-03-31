"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl: string;
}

export default function CVModal({ isOpen, onClose, cvUrl }: CVModalProps) {
  // Convert Drive view link to a preview link for iframe
  const getDrivePreview = (url: string) => {
  const match = url.match(/\/d\/(.*?)(\/|$)/);
  return match
    ? `https://drive.google.com/file/d/${match[1]}/preview`
    : url;
};

const getDriveDownload = (url: string) => {
  const match = url.match(/\/d\/(.*?)(\/|$)/);
  return match
    ? `https://drive.google.com/uc?export=download&id=${match[1]}`
    : url;
};

const previewUrl = getDrivePreview(cvUrl);
const downloadUrl = getDriveDownload(cvUrl);


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[90vh] bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header / Actions */}
            <div className="flex items-center justify-between px-8 py-5 bg-white/5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#007787]/20 rounded-lg text-[#007787]">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-white">
                    Curriculum Vitae
                  </h3>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">
                    Clint_ps_Portfolio_2026.pdf
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Download Option */}
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#007787]/10 hover:bg-[#007787] text-[#007787] hover:text-white rounded-full transition-all duration-300"
                >
                  <Download size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">
                    Download
                  </span>
                </a>

                {/* Close Option */}
                <button
                  onClick={onClose}
                  className="p-2 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-500 rounded-full transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* CV View Area */}
            <div className="flex-1 bg-white/5 relative">
              <iframe
                src={previewUrl}
                className="w-full h-full border-none"
                title="CV Preview"
                allow="autoplay"
              />
              
              {/* Fallback / Loader */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-[#007787]/20 border-t-[#007787] rounded-full animate-spin" />
              </div>
            </div>

            {/* Footer Status */}
            <div className="px-8 py-3 bg-black/40 flex justify-between items-center border-t border-white/5">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">
                  Secure Server Connection
                </span>
              </div>
              <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">
                Rendered @ 2026
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
