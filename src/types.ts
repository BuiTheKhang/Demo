import { LucideIcon } from 'lucide-react';

export interface Course {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  ingredients: string[];
  instructions: string[];
}

export interface Feature {
  id: string;
  iconName: string; // We'll map this to Lucide icons in the component
  title: string;
  description: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}
