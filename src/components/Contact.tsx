"use client";

import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  MapPin,
  Copy,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const email = "clintps1010@gmail.com";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  // Replace 'YOUR_FORMSPREE_ID' with the ID you get from formspree.io
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/meepkayp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("Form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full px-4 pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#007787]/10 rounded-lg">
                <Mail size={20} className="text-[#007787]" />
              </div>
              <h2 className="text-xl md:text-2xl text-[var(--text-main)] font-black tracking-tighter uppercase italic">
                Start a <span className="text-[#007787]">Conversation</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="h-[2px] w-12 bg-[#f15a2b]" />
              <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.1em]">
                Have a project in mind? Fill out the form below and I'll get an
                email notification instantly.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[var(--nav-bg)] border border-[var(--nav-border)] p-6 rounded-2xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Mail size={80} className="text-[#007787]" />
              </div>
              <h3 className="text-[#007787] font-black text-xs uppercase tracking-[0.2em] mb-4">
                Email Me
              </h3>
              <p className="text-[var(--text-main)] font-bold text-lg mb-6 break-all">
                {email}
              </p>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-[#007787]/10 rounded-lg border border-foreground/10 text-xs font-bold transition-all active:scale-95"
              >
                <Copy size={14} />
                <span>Copy Email</span>
              </button>
            </div>

            <div className="bg-[var(--nav-bg)] border border-[var(--nav-border)] p-6 rounded-2xl shadow-xl flex flex-col justify-between flex-grow">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#007787]/10 rounded-lg text-[#007787]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-main)] font-bold">
                      Location
                    </h4>
                    <p className="text-sm text-gray-500 font-medium">
                      Remote / Kerala, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#f15a2b]/10 rounded-lg text-[#f15a2b]">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-main)] font-bold">
                      Response Time
                    </h4>
                    <p className="text-sm text-gray-500 font-medium">
                      Within 24 Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[var(--nav-bg)] border border-[var(--nav-border)] p-6 md:p-8 rounded-2xl shadow-xl">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-[#007787]/10 rounded-full flex items-center justify-center text-[#007787]">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-xl font-black text-[var(--text-main)] uppercase">
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm">
                  Thank you. I have received your enquiry and will get back to
                  you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-[#007787] text-xs font-bold uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#007787] focus:ring-1 focus:ring-[#007787] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#007787] focus:ring-1 focus:ring-[#007787] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full min-h-[110px] bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#007787] focus:ring-1 focus:ring-[#007787] transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#007787] hover:bg-[#008fa3] text-white font-black uppercase tracking-widest py-4 rounded-lg shadow-lg shadow-[#007787]/20 flex items-center justify-center gap-3 transition-all active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && (
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}