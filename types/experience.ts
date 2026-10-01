export type ExperienceCategory = "Organisasi" | "Kepanitiaan" | "Event" | "Kegiatan";

export interface ExperienceImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  category: ExperienceCategory;
  organization: string;
  role: string;
  period: string;
  location: string;
  description: string;
  shortDescription?: string;
  responsibilities: string[];
  activities?: string[];
  skills?: string[];
  logo?: string;
  images?: ExperienceImage[];
}
