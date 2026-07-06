/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Profile {
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  introduction: string;
  bio: string;
  yearsOfExperience: number;
  currentPosition: string;
  location: string;
  email: string;
  phone: string;
  whatsappNumber: string; // international format like "62812345678"
  values: string[];
  languages: string[];
  profilePhoto: string;
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  year: string;
  image: string;
  verifyUrl: string;
}

export interface Experience {
  id: string;
  companyName: string;
  companyLogo: string;
  position: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  startDate: string;
  endDate: string; // "Present" or date
  location: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  role: string;
  client: string;
  duration: string;
  features: string[];
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  gallery: string[];
  status: 'Completed' | 'In Progress' | 'Beta';
}

export interface SkillCategory {
  category: 'Frontend' | 'Backend' | 'Database' | 'Mobile' | 'DevOps' | 'Cloud' | 'UI/UX' | 'Tools' | 'Programming Languages';
  skills: {
    name: string;
    level: number; // 0 to 100
  }[];
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Mobile' | 'DevOps' | 'Cloud' | 'Tools' | 'Language';
  experienceLevel: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  years: number;
  logo: string; // lucide icon name or simple logo placeholder
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatarUrl: string;
  review: string;
  rating: number; // 1 to 5
}

export interface PortfolioData {
  profile: Profile;
  education: Education[];
  certificates: Certificate[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  techStack: TechItem[];
  testimonials: Testimonial[];
}
