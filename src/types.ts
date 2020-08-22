export type Page = {
  title: string;
  body: string;
};

export type Pages = {
  home: Page;
  about: Page;
};

export type Job = {
  department: string;
  details: string;
  employer: string;
  position: string;
};

export type School = {
  degree: string;
  details: string;
  major: string;
  name: string;
  graduation: string;
};

export type Social = {
  github: string;
  twitter: string;
  linkedin: string;
};

export type Profile = {
  bio: string;
  email: string;
  firstName: string;
  lastName: string;
  img: string;
  github: string;
  location: string;
};

export type CV = {
  jobs: Job[];
  pages: Pages;
  profile: Profile;
  projects: any;
  schools: School[];
  skills: any;
  social: Social;
};
