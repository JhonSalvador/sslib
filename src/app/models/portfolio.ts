export type Skill = {
  name: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  techs: string[];
  image?: string;
  video?: string;
  link?: string;
  repository?: string;
};

export type Experience = {
  title: string;
  place: string;
  period: string;
  description: string;
  image?: string;
};

export type Contact = {
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
};