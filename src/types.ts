export interface Project {
  id: string;
  title: string;
  category: 'dynamic' | 'ecommerce' | 'landing' | 'custom';
  categoryLabel: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
  skillsUsed: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  projectType: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; featured?: boolean }[];
}
