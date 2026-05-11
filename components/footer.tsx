"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 border-t border-slate-800/50">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] to-[#0a1628]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-xl font-bold gradient-text">Vaibhav Chauhan</span>
            <p className="text-sm text-slate-500 mt-1">Frontend-Focused Full Stack Developer</p>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/Chauhanvaibhav455", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhav-chauhan-012907274?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
              { icon: Mail, href: "mailto:chauhanvaibhav025@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
          
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1 text-sm text-slate-500"
          >
            © {currentYear} Made with{" "}
            <Heart className="w-4 h-4 text-cyan-500 inline" />{" "}
            by Vaibhav
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
