"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Frontend Development", percentage: 95 },
  { name: "React & Next.js", percentage: 92 },
  { name: "Responsive UI Design", percentage: 90 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "Supabase & SQL", percentage: 85 },
  { name: "API Integration", percentage: 87 },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-[#0f172a] to-[#0a1628]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
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
            Proficiency
          </motion.span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-cyan-400 font-semibold">{skill.percentage}%</span>
              </div>
              
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  style={{
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
