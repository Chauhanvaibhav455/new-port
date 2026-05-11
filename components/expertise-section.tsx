"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Palette, Globe, Database, Cpu, Sparkles, Layers } from "lucide-react";

const expertiseItems = [
  { icon: Code2, label: "React Development" },
  { icon: Layers, label: "Next.js Applications" },
  { icon: Palette, label: "Responsive UI Design" },
  { icon: Layout, label: "Modern Web Interfaces" },
  { icon: Globe, label: "API Integration" },
  { icon: Database, label: "Supabase Integration" },
  { icon: Sparkles, label: "AI-Powered Solutions" },
  { icon: Cpu, label: "Full Stack Projects" },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f172a] to-[#0f1419]" />
      
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
            What I Do
          </motion.span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Expertise</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I build modern, responsive, and visually engaging web applications focused on 
            clean design, seamless user experience, and scalable frontend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative"
            >
              <div className="glass rounded-xl p-6 text-center h-full transition-all duration-300 hover:border-cyan-500/30">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-sm md:text-base text-slate-300 font-medium">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
