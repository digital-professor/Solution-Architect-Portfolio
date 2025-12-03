import React from "react";

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="container mx-auto px-4 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <p className="mt-2 text-xs text-slate-600">Designed with Architecture & Governance in mind.</p>
      </div>
    </footer>
  );
};