import React from "react";
import type { Social } from "@/types";

interface ContactProps {
  title: string;
  description: string;
  socials: Social[];
}

export const Contact: React.FC<ContactProps> = ({ title, description, socials }) => {
  return (
    <section id="contact" className="container mx-auto px-4 md:px-8 py-24">
      <div className="rounded-3xl bg-white/5 border border-white/10 px-6 py-16 md:px-16 md:py-20 text-center shadow-2xl backdrop-blur-md">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tighter text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300 text-lg">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                className="group flex items-center gap-3 rounded-full bg-blue-600/20 px-6 py-3 text-base font-medium text-white border border-blue-500/20 backdrop-blur-sm transition-all hover:bg-blue-600/40 hover:scale-105"
              >
                <Icon className="h-5 w-5 text-blue-300 group-hover:text-white" />
                {social.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};