"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-[#0f172a] to-[#0a1628]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span 
            className="inline-block text-cyan-400 text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Crafting <span className="gradient-text">Digital Experiences</span>
          </h2>
          
          <div className="glass rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
              {"I'm"} Vaibhav Chauhan, a developer passionate about building modern, responsive, 
              and visually engaging web applications. I enjoy combining clean UI design with 
              scalable development to create seamless digital experiences.
            </p>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              My work focuses on React.js, Next.js, Supabase, and modern frontend technologies 
              while exploring AI-powered and full-stack solutions.
            </p>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
