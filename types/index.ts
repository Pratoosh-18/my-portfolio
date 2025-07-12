export interface AboutSection {
  id: string;
  name: string;
  content: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
}

export interface ExperienceSection {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  image: string;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  url: string;
  type: "folder";
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  experience: string;
  proficiency: number;
  description: string;
  projects: string[];
  icon: string;
  type: "file";
  tags: string[];
}

export interface ContactInfo {
  label: string;
  value: string;
}

export interface QuickAction {
  label: string;
  url: string;
}

export interface ContactMethod {
  id: string;
  name: string;
  type: string;
  value: string;
  copyValue: string;
  description?: string;
  information?: ContactInfo[];
  tags?: string[];
  quickAction?: QuickAction;
}

export interface ContactProps {
  onOpenWebsite?: (url: string, title: string) => void
}