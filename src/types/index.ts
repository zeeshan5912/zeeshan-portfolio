export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  iconName: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: string;
  achievements: string[];
  technologies: string[];
}

export type ProjectCategory = "All" | "Next.js" | "React.js" | "Full Stack" | "UI & Admin";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  technologies: string[];
  highlights: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  gradient: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  skills: string[];
  link?: string;
  badgeColor: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  availableForHire: boolean;
  linkedin: string;
  github: string;
  summary: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}
