import React from "react";
import type { Feature } from "@/types";
import { LucideIcon } from "lucide-react";

interface VisionProps {
  id: string;
  title: string;
  description: string;
  features: Feature[];
}

export const Vision: React.FC<VisionProps> = ({ id, title, description, features }) => {
  return (
    <section id={id} className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-1 lg:gap-12">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            {title}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 mt-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-start space-y-4 rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm transition-all hover:bg-white/10 hover:shadow-md hover:border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-100 text-lg">{feature.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};