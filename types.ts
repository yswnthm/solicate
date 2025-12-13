export interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  image: string;
  video?: string;
  aspectRatio?: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  type: string;
  image?: string;
  excerpt?: string;
}

export interface Capability {
  title: string;
  description: string[];
}