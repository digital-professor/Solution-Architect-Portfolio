import React from "react";
import { useState } from "react";
import type { Project } from "@/types";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ChevronDown, ChevronUp, ExternalLink, BookOpen, FileCode, Rocket } from "lucide-react";

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [isBlueprintVisible, setIsBlueprintVisible] = useState(false);

  const hasDiagram = !!project.image;

  const handleTextToggle = () => {
    if (isTextExpanded) {
      setIsBlueprintVisible(false);
    }
    setIsTextExpanded(!isTextExpanded);
  };

  return (
    <div className="group relative bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden mb-12 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:bg-slate-900/80 backdrop-blur-md">
      
      {/* Absolute background gradient effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative p-6 md:p-10">
        {/* Header Section */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            Case Study {index + 1}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-md border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight leading-tight">{project.title}</h3>
        <p className="text-xl text-blue-200/90 mb-8 font-medium max-w-3xl leading-relaxed">{project.subtitle}</p>
        
        {/* Summary (Collapsed View) */}
        {!isTextExpanded && project.summary && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative pl-6 border-l-2 border-blue-500/30 my-8"
          >
             <p className="text-slate-300 text-lg leading-relaxed italic">
               "{project.summary}"
             </p>
          </motion.div>
        )}

        {/* Expanded Content Area */}
        <AnimatePresence>
          {isTextExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 mt-8 border-t border-white/10">
                <div className="max-w-none">
                  
                  {/* Markdown Content */}
                  <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
                    <div className="text-slate-300">
                      <ReactMarkdown
                        components={{
                          h3: ({node, ...props}) => (
                            <h3 className="flex items-center text-xl font-bold text-white mt-10 mb-5 first:mt-0" {...props}>
                              <span className="bg-blue-500 w-1 h-6 mr-3 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                              {props.children}
                            </h3>
                          ),
                          p: ({node, ...props}) => <p className="leading-8 mb-6 text-lg text-slate-300" {...props} />,
                          strong: ({node, ...props}) => <strong className="font-bold text-white drop-shadow-sm" {...props} />,
                          ul: ({node, ...props}) => <ul className="space-y-3 mb-6 pl-5 list-disc marker:text-blue-400 text-lg text-slate-300 leading-8" {...props} />,
                          ol: ({node, ...props}) => <ol className="space-y-3 mb-6 pl-5 list-decimal marker:text-blue-400 marker:font-bold text-lg text-slate-300 leading-8" {...props} />,
                          li: ({node, ...props}) => <li className="pl-2" {...props} />,
                          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500/30 pl-4 py-1 my-6 text-slate-400 italic bg-white/5 rounded-r-lg" {...props} />
                        }}
                      >
                        {project.description}
                      </ReactMarkdown>
                    </div>

                    {/* Sidebar / Info Cards */}
                    <div className="space-y-6">
                       {project.businessCase && (
                          <div className="rounded-2xl bg-gradient-to-br from-blue-900/20 to-slate-900/20 border border-blue-500/20 p-6 shadow-lg backdrop-blur-sm relative overflow-hidden group/card">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-20 transition-opacity">
                              <Rocket className="w-16 h-16 text-blue-400" />
                            </div>
                            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-400 flex items-center gap-2">
                              <Rocket className="w-4 h-4" />
                              Business Impact
                            </h4>
                            <p className="text-base leading-relaxed text-blue-100/90 font-medium">
                              {project.businessCase}
                            </p>
                          </div>
                       )}

                       {project.technicalSpec && (
                          <div className="rounded-2xl bg-slate-950/40 border border-white/10 p-6 overflow-hidden">
                            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                              <FileCode className="w-4 h-4 text-blue-400" />
                              Technical Spec
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technicalSpec?.split('|').map((item, i) => (
                                  <span key={i} className="inline-flex items-center rounded-md bg-blue-500/10 border border-blue-500/20 px-2.5 py-1.5 text-sm font-medium text-blue-200">
                                     {item.trim()}
                                  </span>
                                ))}
                            </div>
                          </div>
                       )}
                    </div>
                  </div>

                  {/* Diagram Section */}
                  {hasDiagram && (
                    <div className="mt-12 bg-slate-950/50 rounded-2xl border border-white/10 overflow-hidden">
                      <button
                        onClick={() => setIsBlueprintVisible(!isBlueprintVisible)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors group/diagram"
                      >
                         <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover/diagram:bg-blue-500/20 transition-colors">
                              <Layers className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-slate-200 text-lg">Architectural Artifacts & Visuals</span>
                         </div>
                         {isBlueprintVisible ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                      </button>

                      <AnimatePresence>
                        {isBlueprintVisible && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 border-t border-white/5">
                                <div className="mt-6 bg-white/5 rounded-xl p-2 md:p-4 border border-white/5 shadow-inner">
                                  <img
                                    src={project.image!.src}
                                    alt={project.image!.hint}
                                    className="w-full h-auto rounded-lg shadow-2xl border border-white/10"
                                  />
                                </div>
                                <p className="mt-4 text-center text-sm text-slate-500 font-medium italic">
                                  {project.image!.hint}
                                </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Links */}
                  {project.link && project.link !== '#' && (
                     <div className="mt-10 flex justify-start border-t border-white/5 pt-6">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 hover:scale-105"
                        >
                          View Live Demo
                          <ExternalLink className="w-4 h-4" />
                        </a>
                     </div>
                  )}

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-start">
          <button
            onClick={handleTextToggle}
            className={`
              group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300
              ${isTextExpanded 
                ? 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10' 
                : 'bg-blue-600 text-white shadow-lg shadow-blue-900/20 hover:bg-blue-500 hover:scale-105'
              }
            `}
          >
            {isTextExpanded ? (
              <>
                <span>Close Case Study</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <BookOpen className="w-4 h-4" />
                <span>Read Full Case Study</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="container mx-auto px-4 md:px-8 pt-0 pb-0">
      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};