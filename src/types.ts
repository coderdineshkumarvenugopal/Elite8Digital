export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  year: number;
  link?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  testimonial: string;
  image: string;
}