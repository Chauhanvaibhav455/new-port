"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Personal Finance Enhancer",
    description: "AI-powered finance platform with expense forecasting, analytics dashboard, and intelligent financial insights.",
    tech: ["React", "Django", "ARIMA"],
    image: "c:\\Users\\chauh\\Downloads\\277673219-a2088949-c4f6-4d18-ba23-308ce3ad19f4.png",
    github: "https://github.com/Chauhanvaibhav455/Final-Year-Project",
  
  },
  {
    title: "Movie Scout",
    description: "Movie discovery application with trending movies, ratings, search functionality, and responsive UI.",
    tech: ["React", "TMDB API"],
    image: "/projects/movie.jpg",
    github: "https://github.com/Chauhanvaibhav455/movies-scout",
    demo: "https://movies-scout.vercel.app/",
  },
  {
    title: "Task Manager",
    description: "Modern task management application with authentication, CRUD operations, and clean dashboard UI.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/projects/task.jpg",
    github: "https://github.com/Chauhanvaibhav455/task-manager-app",
    demo: "https://task-manager-app-f8n7.vercel.app/",
  },

{
    title: "Ai-Spend-Audit",
    description: "AI Spend Audit is a full-stack SaaS application that helps individuals, startups, and engineering teams analyze AI subscription costs and discover opportunities to reduce unnecessary spending across tools like ChatGPT, Claude, Gemini, and Cursor.",
    tech: ["Next.js, Supabase"],
    image: "/projects/task.jpg",
    github: "https://github.com/Chauhanvaibhav455/Final-AI-Spend-Audit-SaaS",
    demo: "https://final-ai-spend-audit-saa-s.vercel.app/",
  },

  {
    title: "Sorting visuzlizer",
    description: " web application that allows users to visualize various sorting algorithms such as Bubble Sort and Insertion Sort in real-time.",
    tech: ["React.js,Tailwind CSS"],
    image: "/projects/task.jpg",
    github: "https://github.com/Chauhanvaibhav455/reactjs-sorting-visualizer",
    demo: "https://reactjs-sorting-visualizer.vercel.app/",
  },

  {
    title: "Finance Dashboard",
    description: " A clean, modern finance dashboard built with React, featuring role-based UI, interactive charts, and full transaction management.",
    tech: ["HTML, CSS , Vite, React.js"],
    image: "/projects/task.jpg",
    github: "https://github.com/Chauhanvaibhav455/finance-dashboard",
    demo: "https://finance-dashboard-pi-three-95.vercel.app/",
  },

];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f172a] to-[#0f1419]" />
      
      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
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
            Portfolio
          </motion.span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="gradient-border h-full">
                <div className="relative rounded-xl overflow-hidden h-full bg-slate-900/80">
                  {/* Project Image Placeholder */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-xl bg-slate-800/80 flex items-center justify-center">
                        <span className="text-2xl font-bold gradient-text">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-cyan-400 border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-900 text-sm font-semibold hover:opacity-90 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
