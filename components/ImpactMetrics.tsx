import React from "react";
import { ShieldAlert, Coins, HandHeart, CheckCircle } from 'lucide-react';
import { motion, Variants } from "framer-motion";

interface Metric {
  value: string;
  label: string;
}

interface ImpactMetricsProps {
  metrics: Metric[];
}

export const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ metrics }) => {
  const icons = [ShieldAlert, Coins, HandHeart, CheckCircle];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 md:px-8 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {metrics.map((metric, index) => {
          const Icon = icons[index] || CheckCircle;
          return (
            <motion.div key={index} variants={itemVariants}>
              <div className="h-full text-center border border-white/10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col">
                <div className="p-6 pb-2 flex-grow">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 rounded-full bg-slate-50/10 text-slate-50">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-100">{metric.value}</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wide">{metric.label}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};