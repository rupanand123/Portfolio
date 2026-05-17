/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  BrainCircuit, 
  Code2, 
  Database, 
  Layers, 
  Terminal, 
  ExternalLink,
  Award,
  BookOpen,
  User,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { resumeData } from "./types.ts";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function App() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/10 px-10">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white font-black text-xl tracking-tighter"
          >
            {resumeData.name.split(' ').map(n => n[0]).join('')}
          </motion.div>
          <div className="flex items-center space-x-10 text-[11px] uppercase tracking-[2px] font-bold">
            {["Works", "About", "Skills", "Certifications"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase() === 'works' ? 'projects' : item.toLowerCase()}`}
                className="text-white/40 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#" 
              onClick={() => window.print()}
              className="px-4 py-2 bg-brand-primary text-[#0A0A0A] hover:bg-white transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-10 pt-32 pb-20">
        {/* HERO + CONTENT GRID */}
        <div className="editorial-grid min-h-[80vh]">
          {/* Left: Hero */}
          <section id="about" className="flex flex-col justify-end pb-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <span className="section-label">AI & Full Stack Developer</span>
              <h1 className="text-[90px] lg:text-[140px] mb-8">
                {resumeData.name.split(' ')[0]}<br />
                TO THE<br />
                <span className="text-brand-primary">CORE.</span>
              </h1>
              <p className="text-xl text-white/40 max-w-sm leading-tight mb-12">
                {resumeData.summary}
              </p>
              <div className="mb-12">
                <button 
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-4 px-8 py-5 bg-white text-[#0A0A0A] font-black uppercase text-sm tracking-widest hover:bg-brand-primary transition-colors group"
                >
                  Download Full Resume
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex gap-6">
                <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">
                  LinkedIn
                </a>
                <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">
                  GitHub
                </a>
              </div>
            </motion.div>
          </section>

          {/* Right: Selected Works & Experience */}
          <section className="flex flex-col gap-24 pt-12">
            {/* Projects list */}
            <div id="projects">
              <span className="section-label">Selected Projects — 25/26</span>
              <div className="divide-y divide-white/10">
                {resumeData.projects.map((project, idx) => (
                  <div key={idx} className="border-b border-white/10 last:border-0">
                    <motion.button 
                      onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="w-full flex justify-between items-end py-8 group relative overflow-hidden text-left"
                    >
                      <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-4">
                        <h3 className={`text-4xl font-light normal-case group-hover:text-brand-primary transition-all duration-500 origin-left tracking-tight ${expandedProject === idx ? 'text-brand-primary scale-105' : ''}`}>
                          {project.title}
                        </h3>
                        <p className="text-xs text-white/20 mt-2 max-w-xs group-hover:text-white/60 transition-colors duration-500">{project.description}</p>
                      </div>
                      
                      <div className="flex flex-col items-end gap-3 transition-all duration-500">
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest group-hover:text-brand-primary">
                          {project.period.split(' - ')[1] || project.period}
                        </span>
                        <ArrowRight className={`w-5 h-5 text-brand-primary transition-all duration-500 ${expandedProject === idx ? 'rotate-90' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                      </div>
                    </motion.button>

                    <AnimatePresence>
                      {expandedProject === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 border-l-2 border-brand-primary/20 ml-4">
                            <div className="space-y-6">
                              <div>
                                <span className="text-[10px] uppercase tracking-widest text-brand-primary font-bold block mb-2">Technologies</span>
                                <div className="flex flex-wrap gap-2">
                                  {project.tech?.map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/5 text-[10px] font-mono text-white/60 hover:text-white transition-colors cursor-default">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <span className="text-[10px] uppercase tracking-widest text-brand-primary font-bold block mb-2">Problem</span>
                                <p className="text-sm text-white/60 leading-relaxed italic">"{project.problem}"</p>
                              </div>
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-brand-primary font-bold block mb-2">Solution</span>
                                <p className="text-sm text-white/80 leading-relaxed font-light">{project.solution}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience list */}
            <div id="experience">
              <span className="section-label">Current Role</span>
              <div className="grid grid-cols-1 gap-10">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-lg font-bold mb-1 group-hover:text-brand-primary transition-colors">{exp.role}</h4>
                    <p className="text-sm text-white/40">{exp.company} ({exp.period})</p>
                    <p className="text-xs text-white/40 mt-2 italic">{exp.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Skills Section - Wider Layout */}
        <section id="skills" className="py-32 border-t border-white/10">
          <span className="section-label">Core Competencies</span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mt-12 text-center md:text-left">
            {[
              { label: "Languages", items: resumeData.competencies.programming },
              { label: "AI & ML", items: resumeData.competencies.ai_ml },
              { label: "Backend", items: resumeData.competencies.frameworks },
              { label: "Frontend", items: resumeData.competencies.web },
              { label: "Database", items: resumeData.competencies.databases },
              { label: "Platform", items: resumeData.competencies.tools }
            ].map((cat, i) => (
              <div key={i}>
                <h5 className="text-[10px] uppercase tracking-widest text-white/30 mb-6 font-bold">{cat.label}</h5>
                <ul className="space-y-3 text-sm font-medium">
                  {cat.items.map(s => <li key={s} className="hover:text-brand-primary transition-colors cursor-default">{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-32 border-t border-white/10">
          <span className="section-label">Certifications & Learning</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {resumeData.certifications.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex justify-between items-center p-6 border border-white/5 hover:border-brand-primary/30 transition-colors group"
              >
                <div>
                  <h4 className="text-sm font-bold group-hover:text-brand-primary transition-colors">{cert.name}</h4>
                  <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">{cert.issuer}</p>
                </div>
                <span className="text-[10px] font-mono text-white/20">{cert.date}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer Contact */}
        <footer className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[11px] text-white/30 uppercase tracking-[2px] font-bold gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div>Available for worldwide projects</div>
            <a href={`mailto:${resumeData.contact.email}`} className="hover:text-brand-primary transition-colors">{resumeData.contact.email}</a>
            <a href={`tel:${resumeData.contact.phone.replace(/\s/g, '')}`} className="hover:text-brand-primary transition-colors">{resumeData.contact.phone}</a>
          </div>
          <div className="my-4 md:my-0">{resumeData.contact.location}</div>
          <div>&copy; {new Date().getFullYear()} {resumeData.name}</div>
        </footer>
      </main>
    </div>
  );
}

