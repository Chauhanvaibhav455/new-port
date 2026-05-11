"use client";

import { motion } from "framer-motion";
import { FolderKanban, Layers, Layout, Sparkles, Code2 } from "lucide-react";

const highlights = [
  { icon: FolderKanban, label: "3+ Featured Projects", value: "3+" },
  { icon: Layers, label: "React & Next.js Focused", value: "React" },
  { icon: Layout, label: "Responsive Modern UI", value: "UI" },
  { icon: Sparkles, label: "AI-Powered Applications", value: "AI" },
  { icon: Code2, label: "Frontend-Centered Development", value: "FE" },
];

export function ImpactSection() {
  return (
    <section id="impact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-[#0f172a] to-[#0a1628]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-cyan-400 text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Impact
          </motion.span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Building Modern{" "}
            <span className="gradient-text">Digital Experiences</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="glass rounded-xl p-6 text-center h-full transition-all duration-300 hover:border-cyan-500/30">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 glow-cyan">
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <p className="text-sm text-slate-300 font-medium leading-snug">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
