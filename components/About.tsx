import React, { useState } from "react";
import type { Skill } from "@/types";
import { Shield, ChevronRight, Layers, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface AboutProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  skills: Skill[];
  technicalProficiencies?: {
    frameworks: string[];
    tools: string[];
    specializations: string[];
  };
}

export const About: React.FC<AboutProps> = ({ title, description, imageUrl, imageHint, skills, technicalProficiencies }) => {
  const [activeTab, setActiveTab] = useState<'mandates' | 'strategy'>('mandates');

  // Parse description to separate logic blocks
  const processDescription = (desc: string) => {
    const parts = desc.split('\n\n');
    if (parts.length < 2) {
        return {
            role: "Solutions Architect",
            primary: desc,
            narrative: "Specialising in secure, scalable enterprise systems."
        };
    }
    
    // Extract parts
    const role = parts[0].replace(/\*\*/g, '').trim();
    const primary = parts[1];
    
    // Filter out the disclaimer line from the narrative parts
    const narrativeParts = parts.slice(2).filter(part => !part.includes("All portfolio examples"));
    const narrative = narrativeParts.join('\n\n');

    return {
      role,
      primary,
      narrative
    };
  };

  const { role, primary, narrative } = processDescription(description);
  const titleParts = title.split(':');
  const mainTitle = titleParts[0];
  const subTitle = titleParts[1] || "";

  return (
    <section id="about" className="bg-slate-950 relative overflow-hidden py-24 border-t border-white/5">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* --- ROW 1: FULL WIDTH HEADER --- */}
        {/* UPDATED: Reduced bottom margin for tighter spacing */}
        <div className="mb-8 lg:mb-10 max-w-5xl">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">
             {mainTitle}
             <span className="block text-slate-500 mt-2">{subTitle}</span>
           </h2>
           
           {/* Moved Designation from Card to Header */}
           <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-0.5 bg-blue-500 rounded-full"></span>
              <p className="text-lg font-bold text-blue-400 uppercase tracking-widest">
                {role}
              </p>
           </div>

           <div className="prose prose-invert prose-lg text-slate-400 font-light max-w-4xl leading-relaxed">
             <ReactMarkdown>{narrative}</ReactMarkdown>
           </div>
        </div>

        {/* --- ROW 2: SPLIT BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

           {/* LEFT COLUMN: PROFILE CARD (Span 4) */}
           <div className="lg:col-span-4 flex flex-col h-full min-h-[500px]">
              <div className="relative flex-grow rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl group flex flex-col">
                 {/* Image Background Layer */}
                 <div className="absolute inset-0 z-0">
                    <img
                      src={imageUrl}
                      alt={imageHint}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                 </div>

                 {/* Content Overlay */}
                 <div className="relative z-10 h-full flex flex-col justify-end p-8 space-y-8 mt-auto">
                    
                    {/* Role Badge removed as it is now in header */}

                    {/* Pull Quote */}
                    <blockquote className="text-2xl font-medium text-white leading-tight">
                      "{primary}"
                    </blockquote>

                    {/* Disclaimer Footnote */}
                    <div className="pt-6 border-t border-white/10 flex items-start gap-3">
                       <Shield className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                       <p className="text-[10px] text-slate-500 font-mono leading-relaxed uppercase tracking-wide opacity-80">
                         No personal or sensitive student data was processed using generative AI in any of these case studies.
                       </p>
                    </div>
                 </div>
              </div>
           </div>

           {/* RIGHT COLUMN: INTERACTIVE CONSOLE (Span 8) */}
           <div className="lg:col-span-8 flex flex-col h-full min-h-[500px]">
              <div className="flex-grow rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-sm overflow-hidden flex flex-col">

                {/* Tabs Header */}
                <div className="flex border-b border-white/10 bg-white/5">
                   <button
                     onClick={() => setActiveTab('mandates')}
                     className={`flex-1 py-5 px-6 text-xs md:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-3 ${activeTab === 'mandates' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
                   >
                      <Layers className="w-4 h-4" />
                      Architecture Mandates
                   </button>
                   <button
                     onClick={() => setActiveTab('strategy')}
                     className={`flex-1 py-5 px-6 text-xs md:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-3 ${activeTab === 'strategy' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
                   >
                      <LayoutGrid className="w-4 h-4" />
                      Technology Strategy
                   </button>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-10 flex-grow relative">
                   <AnimatePresence mode="wait">
                      {activeTab === 'mandates' ? (
                        <motion.div
                          key="mandates"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 h-full"
                        >
                           {skills.map((skill, index) => (
                              <div key={index} className="group">
                                 <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-colors">
                                       <skill.icon className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-white font-bold text-lg">{skill.name}</h4>
                                 </div>
                                 <p className="text-slate-400 text-base leading-relaxed pl-[3.25rem] border-l border-white/5 group-hover:border-blue-500/30 transition-colors">
                                   {skill.description}
                                 </p>
                              </div>
                           ))}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="strategy"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="h-full"
                        >
                          {technicalProficiencies && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                               {/* Patterns */}
                               <div className="space-y-6">
                                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/10 pb-3">Patterns</h4>
                                  <ul className="space-y-4">
                                     {technicalProficiencies.specializations.map(item => (
                                        <li key={item} className="flex items-start gap-3 text-base text-slate-300 group hover:text-white transition-colors">
                                           <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                                           {item}
                                        </li>
                                     ))}
                                  </ul>
                               </div>
                               {/* Frameworks */}
                               <div className="space-y-6">
                                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/10 pb-3">Frameworks</h4>
                                  <ul className="space-y-4">
                                     {technicalProficiencies.frameworks.map(item => (
                                        <li key={item} className="flex items-start gap-3 text-base text-slate-300 group hover:text-white transition-colors">
                                           <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                                           {item}
                                        </li>
                                     ))}
                                  </ul>
                               </div>
                               {/* Toolkit */}
                               <div className="space-y-6">
                                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/10 pb-3">Toolkit</h4>
                                  <ul className="space-y-4">
                                     {technicalProficiencies.tools.map(item => (
                                        <li key={item} className="flex items-start gap-3 text-base text-slate-300 group hover:text-white transition-colors">
                                           <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                                           {item}
                                        </li>
                                     ))}
                                  </ul>
                               </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};