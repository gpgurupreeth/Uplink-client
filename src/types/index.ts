export type PageId =
  | 'home'
  | 'it-services'
  | 'software-automation'
  | 'quiz'
  | 'about'
  | 'contact';

export type DivisionId = 'it' | 'software' | 'both';

export interface ServiceItem {
  id: string;
  division: 'it' | 'software';
  categoryLabel: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  deliverable: string;
  timeline: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface CaseStudy {
  id: string;
  division: 'it' | 'software' | 'both';
  divisionLabel: string;
  clientIndustry: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: {
    value: string;
    label: string;
  }[];
  techStack: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  division: 'it' | 'software' | 'both';
  metricNote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  division?: 'it' | 'software' | 'general';
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    divisionWeight: 'it' | 'software' | 'both';
  }[];
}

export interface QuizResult {
  division: 'it' | 'software' | 'both';
  title: string;
  tagline: string;
  description: string;
  recommendedServices: string[];
  ctaLabel: string;
  prefillInquiry: string;
}
