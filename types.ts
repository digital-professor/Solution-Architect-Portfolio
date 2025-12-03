import { LucideIcon } from "lucide-react";

export interface ImageProps {
  src: string;
  width: number;
  height: number;
  hint: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  subtitle: string;
  summary?: string;
  description: string;
  businessCase?: string;
  technicalSpec?: string;
  image: ImageProps;
  tags: string[];
  link: string;
}

export interface Feature {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface VisionSection {
  title: string;
  description: string;
  features: Feature[];
}

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface PortfolioData {
  name: string;
  initials: string;
  title: string;
  subtitle: string;
  profileImage: ImageProps;
  about: {
    title: string;
    description: string;
    technicalProficiencies?: {
      frameworks: string[];
      tools: string[];
      specializations: string[];
    };
  };
  impact: {
    metrics: Metric[];
  };
  skills: Skill[];
  projects: Project[];
  vision: VisionSection;
  contact: {
    title: string;
    description: string;
  };
  socials: Social[];
}