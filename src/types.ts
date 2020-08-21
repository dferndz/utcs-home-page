export type Page = {
  title: string;
  body: string;
};

export type Pages = {
  home: Page;
  about: Page;
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
  jobs: any;
  pages: Pages;
  profile: Profile;
  projects: any;
  schools: any;
  skills: any;
  social: any;
};
